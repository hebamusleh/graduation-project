'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { QUERIES } from '@/enum'

type Props = {
  mentor: string
}

type FormValues = {
  title: string
  category: string
  post: string
}

const AddPost = ({ mentor }: Props) => {
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      category: 'advice',
      post: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mentor: mentor,
          postCategory: data.category,
          post: data.post,
          title: data.title
        }),
      })

      if (!res.ok) throw new Error('Failed to create post')

      toast.success('Post created successfully!')
      reset()

      queryClient.invalidateQueries({
        queryKey:[QUERIES.POSTS]
      })

    } catch (error) {
      console.error(error)
      toast.error('Failed to create post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input
            {...register('title', { required: 'Title is required' })}
            placeholder="Enter post title"
            className="w-full"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full border rounded-md p-2">
                <option value="advice">Advice</option>
                <option value="book_recommendation">Book Recommendation</option>
                <option value="success_story">Success Story</option>
                <option value="mentor_journey">Mentor Journey</option>
                <option value="motivation">Motivation</option>
              </select>
            )}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Post</label>
          <Textarea
            {...register('post', { required: 'Post content is required' })}
            placeholder="Write your post here..."
            rows={6}
            className="w-full"
          />
          {errors.post && <p className="text-red-500 text-sm mt-1">{errors.post.message}</p>}
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={loading}
          >
            {loading ? 'Publishing...' : 'Publish'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => reset()}
            className="text-gray-700 border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddPost
