# Vercel Auto-Deployment Setup

This guide explains how to set up automatic Vercel deployments when your Neon database changes, without using GitHub Actions.

## Setup Instructions

### 1. Create a Vercel Deploy Hook

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Git** → **Deploy Hooks**
3. Click **Create Hook**
4. Give it a name like "Database Updates"
5. Select the branch (usually `main` or `master`)
6. Copy the generated URL

### 2. Set Environment Variables

Add these to your Vercel project environment variables:

```
VERCEL_DEPLOY_HOOK_URL=your_deploy_hook_url_here
DATABASE_URL=your_neon_database_url_here
```

### 3. How It Works

When you:
- **Create** a new clip → Triggers Vercel deployment
- **Edit** an existing clip → Triggers Vercel deployment  
- **Delete** a clip → Triggers Vercel deployment

The deployment happens automatically through the `/api/redeploy` endpoint, which calls Vercel's API directly.

### 4. Benefits

✅ **No GitHub Actions needed**  
✅ **Faster deployments** (direct API call)  
✅ **Simpler setup** (just one environment variable)  
✅ **More reliable** (no workflow dependencies)  

### 5. Testing

To test the deployment trigger:

```bash
curl -X POST https://your-site.vercel.app/api/redeploy \
  -H "Content-Type: application/json" \
  -d '{"operation": "test"}'
```

## Troubleshooting

- **Deployment not triggering**: Check that `VERCEL_DEPLOY_HOOK_URL` is set correctly
- **Database errors**: Verify your `DATABASE_URL` is correct
- **Permission issues**: Make sure your Vercel deploy hook has the right permissions 