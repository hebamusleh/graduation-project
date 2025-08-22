import type { CollectionConfig } from "payload";

export const SavedArticles: CollectionConfig = {
  slug: "saved-articles",
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
      name: "article",
      type: "relationship",
      relationTo: "articles",
      required: true,
    },
  ],
};
