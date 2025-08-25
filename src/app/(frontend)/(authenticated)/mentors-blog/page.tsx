import MentorsBlogClient from '@/components/organizations/student/MentorBlog';
import { getUser } from '../_actions/getUser';

export default async function page() {
  const user = await getUser();
  return (
    <main className="container mx-auto flex-grow px-4 py-8">
      <MentorsBlogClient isMentor={user} />
    </main>
  )
}
