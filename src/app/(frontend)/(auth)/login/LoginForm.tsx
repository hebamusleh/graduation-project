'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup'

import CheckIcon from '@/components/icons/check'
import EyeIcon from '@/components/icons/eye-slash'
import EyeOffIcon from '@/components/icons/eye-svgrepo-com'
import LockIcon from '@/components/icons/lock'
import EmailIcon from '@/components/icons/sms'

import { getUser } from '../../(authenticated)/_actions/getUser'
import { LoginAPI } from '../_action/login'

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const schema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })

  interface LoginFormData {
    email: string
    password: string
    remember?: boolean
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(schema),
  })
  const rememberValue = useWatch({ control, name: 'remember' })

  const onSubmit = async (data: LoginFormData) => {
    console.log(data)
    setLoading(true)
    setError(null)
    const result = await LoginAPI({
      email: data.email,
      password: data.password,
    })

    if (result.success) {
      const user = await getUser()
      if (user?.roles === 'admin') {
        router.push('/admin')
        console.log('Redirecting to admin dashboard')
      } else if (user?.roles === 'mentor') {
        console.log('Redirecting to mentor dashboard');
        router.push('/mentors-dashboard')
      } else {
        router.push('/student-page')
      }
    } else {
      setError(result.errors || 'Login failed')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <p className="text-center text-sm font-semibold text-red-500">{error}</p>}
      <div className="relative">
        <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          className={`w-full rounded-lg bg-gray-100 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 ${
            errors.email ? '!border-red-500' : 'focus:ring-blue-500'
          }`}
        />
      </div>
      {errors.email && <p className="text-sm font-semibold text-red-500">{errors.email.message}</p>}

      <div className="relative">
        <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          {...register('password')}
          className={`w-full rounded-lg bg-gray-100 py-3 pl-10 pr-10 focus:outline-none focus:ring-2 ${
            errors.password ? '!border-red-500' : 'focus:ring-blue-500'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform"
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {errors.password && (
        <p className="text-sm font-semibold text-red-500">{errors.password.message}</p>
      )}

      <div className="flex items-center justify-between">
        <label htmlFor="remember" className="flex cursor-pointer items-center space-x-2">
          <input id="remember" type="checkbox" {...register('remember')} className="sr-only" />
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border ${
              rememberValue ? '' : 'border-gray-300'
            }`}
          >
            {rememberValue && <CheckIcon className="h-4 w-4 text-green-600" />}
          </div>
          <span className="text-gray-700">Remember me?</span>
        </label>

        <Link href="/forgot" className="text-sm text-blue-600 hover:underline">
          Forgot?
        </Link>
      </div>

      {/* submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Loading…' : 'Login'}
      </button>
    </form>
  )
}
