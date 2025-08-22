import type { CollectionConfig } from "payload";

export const Students: CollectionConfig = {
  slug: "students",
  admin: {
    useAsTitle: "userId",
  },
  fields: [
    {
      name: "userId",
      type: "relationship",
      relationTo: "users",
      required: true,
      unique: true,
      filterOptions: {
        roles: { equals: "student" },
      },
    },
    {
      name: "goal",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
      required: true,
    },
    {
      name: "birthday",
      type: "date",
      required: true,
    },
    {
      name: "major",
      type: "text",
      required: true,
    },
    {
      name: "pronoun",
      type: "text",
      required: true,
    },
    {
      name: "urlLinkedin",
      type: "text",
    },
    {
      name: "isAgree",
      type: "checkbox",
    },
  ],
};
