import type { CollectionConfig } from "payload";

export const Students: CollectionConfig = {
  slug: "students",
  admin: {
    useAsTitle: "email",
  },
   auth:true,
  fields: [
    // {
    //   name: "userId",
    //   type: "relationship",
    //   relationTo: "users",
    //   required: true,
    //   unique: true,
    //   filterOptions: { role: { equals: "student" } },
    // },
    // {
    //   name: "goal",
    //   type: "text",
    //   required: true,
    // },
    // {
    //   name: "bio",
    //   type: "textarea",
    //   required: true,
    // },
    // {
    //   name: "birthday",
    //   type: "date",
    //   required: true,
    // },
    // {
    //   name: "major",
    //   type: "text",
    //   required: true,
    // },
    // {
    //   name: "pronoun",
    //   type: "text",
    //   required: true,
    // },
    // {
    //   name: "urlLinkedin",
    //   type: "text",
    // },
    // {
    //   name: "isAgree",
    //   type: "checkbox",
    // },
  ],
};
