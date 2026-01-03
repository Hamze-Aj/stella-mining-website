# Quick Setup Notes

## Environment Variables Configured

I've created `.env.local` with your Supabase credentials:
- URL: https://mzopioqkdtcarpuuwzyy.supabase.co
- Anon Key: Configured
- Service Role Key: Configured

## Important: Verify Your Supabase Keys

The keys you provided have a format that's different from standard Supabase keys. Standard Supabase keys usually look like JWT tokens (starting with `eyJ...`).

To verify you have the correct keys:
1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project
3. Go to Settings > API
4. You should see:
   - **Project URL**: `https://mzopioqkdtcarpuuwzyy.supabase.co` ✅ (this matches!)
   - **anon/public key**: Should be a long JWT token (starts with `eyJ...`)
   - **service_role key**: Should also be a JWT token (starts with `eyJ...`)

If your keys look different, please copy the keys from the Supabase dashboard API settings page.

## Next Steps

1. **Run the database migration**:
   - Go to SQL Editor in Supabase dashboard
   - Copy and paste the SQL from `supabase/migrations/001_initial_schema.sql`
   - Run it to create the tables

2. **Create storage buckets** (optional, for file uploads):
   - Go to Storage in Supabase dashboard
   - Create buckets: `project-images`, `gallery-images`, `investor-documents`
   - Set them to public

3. **Create an admin user**:
   - Go to Authentication > Users
   - Click "Add User" > "Create new user"
   - Set email and password
   - Use these credentials to log in at `/admin/login`

4. **Test the site**:
   ```bash
   npm run dev
   ```

The site should now connect to Supabase!


