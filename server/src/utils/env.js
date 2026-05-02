const parseEnvList = (value = "") =>
  value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

const getClientOrigins = () =>
  parseEnvList(
    [
      process.env.CLIENT_URL,
      process.env.CLIENT_ORIGIN,
      process.env.URL,
      process.env.DEPLOY_URL,
      process.env.DEPLOY_PRIME_URL
    ]
      .filter(Boolean)
      .join(",")
  );

const getAdminEmails = () =>
  parseEnvList(process.env.ADMIN_EMAILS || "").map((email) => email.toLowerCase());

module.exports = {
  parseEnvList,
  getClientOrigins,
  getAdminEmails
};
