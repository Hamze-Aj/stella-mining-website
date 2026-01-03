# Admin Portal Setup Guide

This guide explains how to set up the admin portal and Supabase backend for the Stella Mining website.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. Node.js 18+ installed
3. Access to your Supabase project

## Step 1: Create Supabase Project

1. Go to https://app.supabase.com
2. Create a new project
3. Note down your project URL and API keys (found in Settings > API)

## Step 2: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
3. Run the SQL script to create tables and policies

## Step 3: Set Up Storage Buckets

1. Go to **Storage** in your Supabase dashboard
2. Create the following public buckets:
   - `project-images` (public)
   - `gallery-images` (public)
   - `investor-documents` (public)

3. For each bucket, set policies:
   - **Public Access**: Enable public read access
   - **Upload Policy**: Only authenticated users can upload

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

2. Get these values from: Supabase Dashboard > Settings > API

**Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

## Step 5: Create Admin User

1. In Supabase dashboard, go to **Authentication** > **Users**
2. Click **Add User** > **Create new user**
3. Enter email and password for your admin account
4. The user will be able to log in at `/admin/login`

**Note**: There is no public sign-up. All admin users must be created manually in Supabase.

## Step 6: Install Dependencies

```bash
npm install
```

## Step 7: Run Development Server

```bash
npm run dev
```

## Step 8: Access Admin Portal

1. Navigate to `http://localhost:3000/admin/login`
2. Log in with the admin credentials you created
3. You'll be redirected to the admin dashboard

## Admin Portal Features

### Dashboard (`/admin`)
- Overview of all content (projects, gallery images, documents)
- Quick action buttons to add new content

### Projects Management (`/admin/projects`)
- View all projects
- Add new project (`/admin/projects/new`)
- Edit existing project (`/admin/projects/[id]/edit`)
- Delete project

### Gallery Management (`/admin/gallery`)
- View all gallery images
- Add new image (`/admin/gallery/new`)
- Edit existing image (`/admin/gallery/[id]/edit`)
- Delete image

### Investor Documents (`/admin/investors`)
- View all documents
- Add new document (`/admin/investors/new`)
- Edit existing document (`/admin/investors/[id]/edit`)
- Delete document

## Uploading Images and Files

### Option 1: Supabase Storage Dashboard
1. Go to Storage in Supabase dashboard
2. Navigate to the appropriate bucket
3. Upload files
4. Copy the public URL
5. Paste the URL in the admin form

### Option 2: Supabase Storage API (Future Enhancement)
You can enhance the admin portal to include direct file upload functionality using Supabase Storage API.

## Public Pages Integration

The public pages (`/projects`, `/gallery`, `/investors`) automatically fetch data from Supabase:

- If Supabase is configured and has data, it displays that data
- If Supabase is not configured or returns empty, it falls back to hardcoded placeholder data
- This ensures the site works even during setup

## Security Notes

1. **Row Level Security (RLS)**: All tables have RLS enabled
   - Public can read (view) all data
   - Only authenticated admins can create, update, or delete

2. **Service Role Key**: Keep this secret! Only use in server-side code
   - Never expose in client-side code
   - Already configured to use service role key for server-side queries

3. **Admin Authentication**: 
   - Only manually created users in Supabase can access `/admin`
   - No public sign-up available

## Troubleshooting

### "Unauthorized" errors
- Check that you're logged in
- Verify your Supabase credentials in `.env.local`
- Ensure the user exists in Supabase Authentication

### Data not showing on public pages
- Check Supabase connection (verify environment variables)
- Check that data exists in Supabase tables
- Check browser console for errors
- Public pages will fall back to hardcoded data if Supabase fails

### Can't upload files
- Verify storage buckets are created and public
- Check bucket policies allow authenticated uploads
- For now, upload via Supabase dashboard and paste URLs

## Deployment to Vercel

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy!

## Next Steps

- Consider adding image upload functionality directly in the admin portal
- Add bulk operations (delete multiple items)
- Add content preview before publishing
- Add activity logs for admin actions

