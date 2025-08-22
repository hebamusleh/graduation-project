import type { CollectionConfig } from "payload";

export const SavedPosts: CollectionConfig = {
  slug: "saved-posts",
  admin: {
    useAsTitle: "student",
  },
  fields: [
    {
      name: "student",
      type: "relationship",
      relationTo: "students",
      required: true,
    },
    {
      name: "post",
      type: "relationship",
      relationTo: "posts",
      required: true,
    },
  ],
};
