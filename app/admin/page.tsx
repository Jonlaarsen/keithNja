import { cookies } from 'next/headers';
import CreateForm from '@/components/CreateForm';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const cookieStore = cookies();
  const isLoggedin = (await cookieStore).get('isLoggedin')?.value === 'true';

  if (!isLoggedin) {
    redirect('/');
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <CreateForm />
    </div>
  );
}
