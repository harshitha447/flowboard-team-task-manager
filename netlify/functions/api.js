const serverless = require("serverless-http");
const app = require("../../server/src/app");
const connectDB = require("../../server/src/config/db");
const { ensureDemoUsers } = require("../../server/src/utils/seedDemoUsers");

let bootstrapPromise;

const bootstrap = async () => {
  if (!bootstrapPromise) {
    bootstrapPromise = connectDB()
      .then(() => ensureDemoUsers())
      .catch((error) => {
        bootstrapPromise = null;
        throw error;
      });
  }

  return bootstrapPromise;
};

const normalizeEventPath = (event) => {
  if (event.path?.startsWith("/.netlify/functions/api")) {
    event.path = event.path.replace(/^\/\.netlify\/functions\/api/, "");
  }

  if (!event.path || event.path === "/") {
    event.path = "/health";
  }

  if (!event.path.startsWith("/api") && event.path !== "/health") {
    event.path = `/api${event.path}`;
  }

  if (event.rawUrl) {
    event.rawUrl = event.rawUrl.replace("/.netlify/functions/api", "");
  }
};

const expressHandler = serverless(app);

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await bootstrap();
  normalizeEventPath(event);

  return expressHandler(event, context);
};
