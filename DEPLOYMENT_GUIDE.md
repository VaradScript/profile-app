# How to Deploy to Vercel

Since your project is a React application, deploying to Vercel is very straightforward.

## Prerequisites
1. A [GitHub](https://github.com) account.
2. A [Vercel](https://vercel.com) account (you can sign up using GitHub).

## Step 1: Push your code to GitHub
If you haven't already pushed your latest changes to GitHub, do so now:

1. Open your terminal (or VS Code terminal).
2. Run the following commands:
   ```bash
   git add .
   git commit -m "Final polish for Vercel deployment"
   git push origin main
   ```
   *(Note: If you haven't connected to a remote repo yet, create a new repository on GitHub and follow the instructions to push your existing code).*

## Step 2: Deploy on Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** -> **"Project"**.
3. You should see your GitHub repository `profile-app` (or whatever you named it) in the list. Click **"Import"**.
4. **Configure Project**:
   - **Framework Preset**: Vercel usually detects "Create React App" automatically.
   - **Root Directory**: Leave as `./`.
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `build` (default).
5. Click **"Deploy"**.

## Step 3: View your Site
- Vercel will build your project (this takes about a minute).
- Once done, you will get a live URL (e.g., `https://your-profile-app.vercel.app`).
- You can share this link with anyone!

## Troubleshooting
- **Assets not loading?** I removed the `homepage` field from `package.json` which often causes issues on Vercel. It should work fine now.
- **404 on refresh?** If you use React Router in the future, you might need a `vercel.json` configuration, but for this single-page app, it works out of the box.

Enjoy your realistic Windows XP portfolio on the web! 🌍
