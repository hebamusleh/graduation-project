import type { CollectionConfig } from "payload";

export const Mentors: CollectionConfig = {
  slug: "mentors",
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
      filterOptions: { roles: { equals: "mentor" } },
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
      name: "yearsOfExperience",
      type: "number",
      required: true,
    },
    {
      name: "skills",
      type: "textarea",
    },
    {
      name: "profilePhoto",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "urlLinkedin",
      type: "text",
    },
    {
      name: "welcomeStatement",
      type: "textarea",
    },
    {
      name: "isAgree",
      type: "checkbox",
    },
    {
      name: "expertTrackId",
      type: "relationship",
      relationTo: "tracks",
    },
    {
      name: "posts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
    },
    {
      name: "articles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
    },
    {
      name: "resources",
      type: "relationship",
      relationTo: "resources",
      hasMany: true,
    },
  ],
};
