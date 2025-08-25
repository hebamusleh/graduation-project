'use client'
import UserIcon from '@/components/icons/frame'
import MailIcon from '@/components/icons/sms'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type ContactFormValues = {
  name: string
  email: string
  message: string
}

const schema = yup.object({
  name: yup.string().required('Full name is required').min(3, 'At least 3 characters'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  message: yup.string().required('Message is required').min(10, 'At least 10 characters')
})

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        toast.error("Your message sent failed")
        throw new Error('Failed to send message')
      }

      toast.success("Your message sent successfully")
      reset()
    } catch (error) {
      console.error(error)
      toast.error("Your message sent failed")
    }
  }

  return (
    <div className="container mx-auto flex-grow flex flex-col md:flex-row items-start gap-8px-4 py-8 sm:p-6">
      <div className="flex-1 w-full max-w-lg">
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          A clean and modern interface for seamless communication, reflecting professionalism and accessibility.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="name"
                {...register('name')}
                placeholder="Jason Mark"
                className="bg-gray-100 border-none focus:ring-0 pl-10 w-full"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="email123@gmail.com"
                className="bg-gray-100 border-none focus:ring-0 pl-10 w-full"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Your message..."
              rows={12}
              className="bg-gray-100 border-none focus:ring-0 p-3 w-full h-auto min-h-48"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 transition-colors cursor-pointer"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>

      <div className="flex-1 w-full flex justify-center md:justify-end">
        <Image
          src="/assets/images/contact.png"
          alt="Contact Us illustration"
          width={800}
          height={600}
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl h-auto"
        />
      </div>
    </div>
  )
}
