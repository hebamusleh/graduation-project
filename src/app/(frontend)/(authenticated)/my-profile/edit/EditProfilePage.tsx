'use client'
import { ArrowRight } from '@/components/icons'
import EyeIcon from '@/components/icons/eye-slash'
import EyeOffIcon from '@/components/icons/eye-svgrepo-com'
import UploadCloud from '@/components/icons/gallery-export'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IMAGE_URL } from '@/services/api'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
// import { useUpdateUser } from "@/hooks/services-hooks/users.hook";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { getUser } from '../../_actions/getUser'
import { updateProfile, updateUser } from '../../_actions/updateUser'

type EditProfileFormValues = {
  password: string
  pronoun: string
  major: string
  linkedin: string
  goals: string
  bio: string
  avatar?: FileList
}

export default function EditProfilePage({ user }: { user: any }) {
  console.log('editing page user :', user)

  const router = useRouter()

  // get previous user data
  //   const { mutate: update } = useUpdateUser();

  const [avatarPreview, setAvatarPreview] = useState<string>(user?.profile?.profilePhoto?.url)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm<EditProfileFormValues>({
    defaultValues: {
      password: '',
      pronoun: user?.profile?.pronoun,
      major: user?.profile?.major,
      linkedin: user?.profile?.urlLinkedin,
      goals: user?.profile?.goal,
      bio: user?.profile?.bio,
      avatar: user?.profile?.profilePhoto?.url,
    },
  })

  const avatarFile = watch('avatar')

const onSubmit = async (data: EditProfileFormValues) => {
  console.log('Submitting form: ', data)

  try {
    if (data.password) {
      await updateUser(user.id, { password: data.password })
    }

    if (user.profile && user.roles.includes('mentor')) {
      await updateProfile('mentors', user.profile.id, {
        pronoun: data.pronoun,
        major: data.major,
        urlLinkedin: data.linkedin,
        goal: data.goals,
        bio: data.bio,
      })
    }

    if (user.profile && user.roles.includes('student')) {
      await updateProfile('students', user.profile.id, {
        pronoun: data.pronoun,
        major: data.major,
        urlLinkedin: data.linkedin,
        goal: data.goals,
        bio: data.bio,
      })
    }

    // إعادة توجيه
    router.push('/my-profile')
  } catch (error) {
    console.error('Error updating profile:', error)
  }
}


  const handleAvatarChange = (file?: File) => {
    if (file) {
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser()
    }
    setAvatarPreview(`${IMAGE_URL}${user?.profile?.profilePhoto?.url}`)

    fetchUser()
  }, [])

  return (
    <>
      <div className="container mx-auto px-4 py-8 text-sm text-gray-500 mb-4 flex items-center pl-6">
        <Link href="/my-profile" className="hover:underline">
          My Profile
        </Link>
        <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
        <span className="text-gray-700">Edit</span>
      </div>

      <div className="max-w-5xl ml-0 py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-8">
          {/* Avatar Column */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 md:pr-6">
            <div className="relative w-[120px] h-[120px]">
              <Image
                src={avatarPreview}
                alt="Avatar Preview"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <label className="flex items-center text-blue-600 cursor-pointer space-x-1">
              <UploadCloud className="h-5 w-5" />
              <span className="text-sm">Replace</span>
              <input
                type="file"
                accept="image/*"
                {...register('avatar')}
                className="sr-only"
                onChange={(e) => handleAvatarChange(e.target.files?.[0])}
              />
            </label>
          </div>

          {/* Form Column */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/3 space-y-6 md:pl-6">
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative w-full max-w-md">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="border border-gray-300 w-full pr-10"
                  {...register('password')}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Pronoun */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pronoun</label>
              <Controller
                control={control}
                name="pronoun"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full max-w-md border border-gray-300">
                      <SelectValue placeholder="Select pronoun" />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg z-50">
                      <SelectItem value="she">she</SelectItem>
                      <SelectItem value="he">he</SelectItem>
                      <SelectItem value="they">they</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Major */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Major</label>
              <Controller
                control={control}
                name="major"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full max-w-md border border-gray-300">
                      <SelectValue placeholder="Select major" />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg z-50">
                      <SelectItem value="uxui design">UX/UI Design</SelectItem>
                      <SelectItem value="software engineering">Software Engineering</SelectItem>
                      <SelectItem value="computer science">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
              <Input
                type="url"
                className="border border-gray-300 w-full max-w-md"
                {...register('linkedin')}
              />
            </div>

            {/* Goals */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Goals</label>
              <Textarea
                rows={2}
                className="border border-gray-300 w-full max-w-md"
                {...register('goals')}
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <Textarea
                rows={5}
                className="border border-gray-300 w-full max-w-md"
                {...register('bio')}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4 w-full max-w-md">
              <Button
                type="submit"
                className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/my-profile')}
                className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
