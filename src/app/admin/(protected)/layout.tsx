import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/supabase/auth';

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect all routes in this route group - redirect to login if not authenticated
  const user = await getCurrentUser();
  
  if (!user) {
    redirect('/admin/login');
  }

  return <>{children}</>;
}

