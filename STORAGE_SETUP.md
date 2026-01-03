# Supabase Storage Setup for File Uploads

## Required Storage Buckets

The admin portal requires the following storage buckets to be created in your Supabase project:

1. **project-images** - For project images
2. **gallery-images** - For gallery images  
3. **investor-documents** - For investor PDFs and documents

## Setup Instructions

1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project
3. Navigate to **Storage** in the left sidebar
4. Create each bucket:

### Creating a Bucket

For each bucket (project-images, gallery-images, investor-documents):

1. Click **"New bucket"**
2. Enter the bucket name (e.g., `project-images`)
3. **Important**: Make the bucket **Public** (toggle "Public bucket" ON)
   - This allows public access to uploaded files via URLs
4. Click **"Create bucket"**

### Setting Bucket Policies

After creating buckets, set up policies to allow authenticated users to upload:

1. Go to **Storage** → Select the bucket
2. Click **"Policies"** tab
3. Click **"New Policy"**
4. Choose **"For full customization"**
5. Use this policy SQL:

```sql
-- Allow authenticated users to upload files
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'bucket-name-here');

-- Allow authenticated users to update/delete their uploads
CREATE POLICY "Allow authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'bucket-name-here');

CREATE POLICY "Allow authenticated deletes"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'bucket-name-here');
```

Replace `bucket-name-here` with the actual bucket name (project-images, gallery-images, or investor-documents).

**Alternative**: You can use the policy templates in Supabase:
- Select "Allow authenticated users to upload files" template
- Adjust bucket name as needed

## Bucket Configuration Summary

| Bucket Name | Purpose | Public | Upload Policy |
|------------|---------|--------|---------------|
| project-images | Project images | Yes | Authenticated users only |
| gallery-images | Gallery photos | Yes | Authenticated users only |
| investor-documents | PDF documents | Yes | Authenticated users only |

## Testing

After setup:
1. Log in to the admin portal
2. Try uploading an image in Projects or Gallery
3. Try uploading a document in Investors
4. Verify files appear correctly on public pages

## Troubleshooting

**Error: "Bucket not found"**
- Verify bucket names match exactly (case-sensitive)
- Check bucket exists in Supabase Storage

**Error: "Upload failed: new row violates row-level security policy"**
- Verify bucket policies are set correctly
- Ensure you're logged in as an authenticated user
- Check policy allows INSERT for authenticated users

**Files upload but URLs don't work**
- Ensure buckets are set to **Public**
- Check file paths are correct in database records

**Files don't appear on public pages**
- Verify bucket is public
- Check database records have correct file URLs
- Verify URLs are accessible in browser

