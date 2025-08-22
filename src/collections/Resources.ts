import type { CollectionConfig } from "payload";

export const Resources: CollectionConfig = {
  slug: "resources",
  admin: {
    useAsTitle: "title",
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
      name: "track",
      type: "relationship",
      relationTo: "tracks",
      required: true,
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "linkName",
      type: "text",
    },
    {
      name: "link",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
      ],
    },
    {
      name: "rejection_reason",
      type: "textarea",
    },
  ],
};
