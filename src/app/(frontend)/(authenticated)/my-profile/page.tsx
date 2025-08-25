import EditIcon from '@/components/icons/edit'
import SettingsIcon from '@/components/icons/setting'
import { IMAGE_URL } from '@/services/api'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { getUser } from '../_actions/getUser'

export default async function ProfilePage() {
  const user = await getUser()
  return (
    <main className="w-11/12 mx-auto px-6 py-10 max-w-[1536px]">
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-32">
        <div className="w-full lg:w-2/3">
          <div className="space-y-6">
            <p>
              <span className="font-medium">Name:</span>{' '}
              <span className="text-gray-700">
                {user?.firstName} {user?.lastName}
              </span>
            </p>
            <p>
              <span className="font-medium">Major:</span>{' '}
              <span className="text-gray-700">{user?.profile?.major}</span>
            </p>
            <p>
              <span className="font-medium">Roles:</span>{' '}
              <span className="text-gray-700">{user?.roles}</span>
            </p>
            <p>
              <span className="font-medium">Email:</span>{' '}
              <span className="text-gray-700">{user?.email}</span>
            </p>
            <p>
              <span className="font-medium">Birthday:</span>{' '}
              <span className="text-gray-700">
                {user?.profile?.birthday
                  ? format(user.profile.birthday, 'yyyy-MM-dd')
                  : 'N/A'}
              </span>
            </p>
            <div>
              <span className="font-medium">Bio:</span>
              <p className="mt-1 text-gray-700 whitespace-pre-line">{user?.profile?.bio}</p>
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <Link href="/my-profile/setting">
              <SettingsIcon className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link href="/my-profile/edit">
              <EditIcon className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
            <Image
            src={
              user?.profile &&
              'profilePhoto' in user.profile &&
              typeof user.profile.profilePhoto === 'object' &&
              user.profile.profilePhoto !== null &&
              'url' in user.profile.profilePhoto &&
              typeof user.profile.profilePhoto.url === 'string'
                ? `${IMAGE_URL}${user.profile.profilePhoto.url}`
                : '/default-avatar.png'
            }
            alt="Avatar"
            layout="responsive"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  )
}
