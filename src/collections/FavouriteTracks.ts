import type { CollectionConfig } from "payload";

export const FavouriteTracks: CollectionConfig = {
  slug: "favourite-tracks",
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
      name: "track",
      type: "relationship",
      relationTo: "tracks",
      required: true,
    },
  ],
};
