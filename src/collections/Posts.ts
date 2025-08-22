import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "post", 
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  timestamps: true, 
  fields: [
    {
      name: "mentor",
      type: "relationship",
      relationTo: "mentors",
      required: true,
    },
    {
      name: "postCategory",
      type: "select",
      required: true,
      defaultValue: "advice",
      options: [
        { label: "Advice", value: "advice" },
        { label: "Book Recommendation", value: "book_recommendation" },
        { label: "Success Story", value: "success_story" },
        { label: "Mentor Journey", value: "mentor_journey" },
        { label: "Motivation", value: "motivation" },
      ],
    },
    {
      name: "post",
      type: "textarea",
      required: true,
      maxLength: 1000,
    },
    {
      name: "savedPosts",
      type: "relationship",
      relationTo: "saved-posts", 
      hasMany: true,
    },
  ],
};
