FlowBoard - Smart Team Task Manager
===================================

Project Overview
----------------
FlowBoard is a full-stack SaaS-style team task manager built for assignment submission and deployment. It helps teams manage projects, assign tasks, track progress, monitor deadlines, review productivity, and manage team workload from one clean dashboard.

GitHub Repository:
https://github.com/harshitha447/flowboard-team-task-manager


Main Features
-------------
1. Authentication
   - Signup
   - Login
   - Logout
   - JWT-based protected routes
   - Password hashing with bcrypt
   - Google sign-in support

2. Role-Based Access Control
   - Admin role
   - Member role
   - Admin-only pages for Team, Analytics, and Deadlines
   - Members can view and update only assigned work

3. Project Management
   - Create projects
   - Edit projects
   - Delete projects
   - Add members to projects
   - Track project progress
   - View project health status

4. Task Management
   - Create tasks
   - Assign tasks to members
   - Set due dates
   - Set estimated hours
   - Set and update task status
   - Add comments
   - Delete tasks

5. Smart Features
   - Smart priority engine
   - Smart deadline alerts
   - Weekly productivity summary
   - Team workload management
   - Member availability tracking
   - Notification center
   - Recent activity log
   - Focus mode for member tasks
   - Floating Ask AI assistant for task and workspace summaries


User Roles
----------
Admin:
Can create, edit, and delete projects and tasks. Can assign members, manage project teams, view analytics, monitor deadlines, view team workload, and load demo data.

Member:
Can view assigned projects and tasks, update task status, add comments, and use My Tasks / Focus Mode. Members cannot delete projects or tasks and cannot access admin-only pages.


Tech Stack
----------
Frontend:
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Zustand
- Axios
- Recharts
- Lucide React

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- express-validator

Deployment:
- Netlify full-stack deployment
- React frontend served from client/dist
- Express backend served through Netlify Functions at /api


Folder Structure
----------------
flowboard/
  client/
    src/
      components/
      hooks/
      lib/
      pages/
      routes/
      services/
      store/
      types/
    .env.example
    package.json

  server/
    src/
      config/
      controllers/
      middleware/
      models/
      routes/
      seed.js
      utils/
    tests/
    .env.example
    package.json

  netlify/
    functions/
      api.js

  docs/
    screenshots/

  README.md
  README.txt
  DEMO_SCRIPT.md
  netlify.toml
  package.json


Main Pages
----------
/login
/signup
/dashboard
/projects
/projects/:projectId
/tasks
/tasks/:taskId
/my-tasks
/notifications
/team
/analytics
/deadlines
/settings


Screenshots
-----------
Screenshots are included in:
docs/screenshots/

Included screenshots:
- login.png
- dashboard.png
- projects.png
- tasks.png
- team.png
- analytics.png
- deadlines.png
- notifications.png


API Routes
----------
Auth:
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/google
GET  /api/auth/me

Projects:
GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
PUT    /api/projects/:id
DELETE /api/projects/:id

Tasks:
GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/:id
PUT    /api/tasks/:id
DELETE /api/tasks/:id
PATCH  /api/tasks/:id/status
POST   /api/tasks/:id/comments

Dashboard:
GET /api/dashboard/stats
GET /api/dashboard/activity
GET /api/dashboard/reminders

Team:
GET /api/team
GET /api/team/workload

Analytics:
GET /api/analytics/weekly
GET /api/analytics/productivity

Deadlines:
GET /api/deadlines

Demo:
POST /api/demo/load


Demo Credentials
----------------
Admin:
Email: admin@flowboard.com
Password: 123456

Member:
Email: member@flowboard.com
Password: 123456


Seeded Demo Data
----------------
The app includes seeded demo users, projects, tasks, comments, activity, and progress data.

Sample projects:
- Website Redesign
- Mobile App Launch
- Marketing Campaign
- API Integration
- Customer Portal
- Q2 Product Roadmap

Sample task conditions:
- Completed tasks
- Pending tasks
- In-progress tasks
- High-priority tasks
- Overdue tasks
- Assigned member tasks


Environment Variables
---------------------
Backend / Netlify Functions:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=replace-this-with-a-long-random-secret
NODE_ENV=production
GOOGLE_CLIENT_ID=your-google-web-client-id
ADMIN_EMAILS=admin@flowboard.com
AUTO_SEED_DEMO_USERS=true

Frontend:
VITE_API_URL=/api
VITE_API_TIMEOUT=15000
VITE_GOOGLE_CLIENT_ID=your-google-web-client-id

Optional:
JWT_EXPIRES_IN=7d
JWT_ISSUER=flowboard
JWT_AUDIENCE=flowboard-client
PUBLIC_SIGNUP_ENABLED=true
REQUEST_BODY_LIMIT=10kb


Run Locally
-----------
1. Install backend dependencies:
   cd server
   npm install

2. Install frontend dependencies:
   cd ../client
   npm install

3. Add backend environment variables in server/.env.

4. Start the backend:
   cd server
   npm run dev

5. Start the frontend:
   cd client
   npm run dev

6. Open:
   http://localhost:5173


Testing
-------
Backend tests:
cd server
npm test

Frontend typecheck:
cd client
npm run typecheck

Frontend lint:
cd client
npm run lint

Frontend build:
cd client
npm run build

Full Netlify build from root:
npm run build


Netlify Deployment Steps
------------------------
1. Push the project to GitHub.
2. Open Netlify.
3. Select Add new site.
4. Select Import an existing project.
5. Choose the GitHub repository.
6. Keep the base directory empty because the project uses the root netlify.toml file.
7. Netlify will automatically use:
   Build command: npm run build
   Publish directory: client/dist
   Functions directory: netlify/functions
8. Add the required environment variables in Netlify.
9. Deploy the site.
10. Test login and dashboard after deployment.


Google Sign-In Setup
--------------------
In Google Cloud Console, add the deployed Netlify URL to Authorized JavaScript origins.

Example:
https://your-site-name.netlify.app

Use only the origin URL. Do not include /login or any other path.


Final Submission Checklist
--------------------------
- GitHub repository is public or accessible.
- README.md and README.txt are included.
- Screenshots are available in docs/screenshots.
- Netlify deployment is configured from the repository root.
- Environment variables are added in Netlify.
- Admin login works.
- Member login works.
- Dashboard, Projects, Tasks, Team, Analytics, Deadlines, and Notifications pages load.
- Demo script is available in DEMO_SCRIPT.md.


Demo Script
-----------
See DEMO_SCRIPT.md for a short 2-5 minute walkthrough script.
