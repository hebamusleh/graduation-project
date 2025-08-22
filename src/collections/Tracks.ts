import type { CollectionConfig } from "payload";

export const Tracks: CollectionConfig = {
  slug: "tracks",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: "trackName",
  },
  fields: [
    {
      name: "trackName",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "tracksCategory",
      required: true,
    },
    {
      name: "trackDescription",
      type: "textarea",
    },
    {
      name: "trackImage",
      type: "upload",
      relationTo: "media", 
    },
    {
      name: "roadmapLink",
      type: "text",
    },
    {
      name: "paragraph",
      type: "textarea",
    },
    {
      name: "favoriteTracks",
      type: "relationship",
      relationTo: "favourite-tracks", 
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
    {
      name: "mentors",
      type: "relationship",
      relationTo: "mentors",
      hasMany: true,
    },
  ],
};
