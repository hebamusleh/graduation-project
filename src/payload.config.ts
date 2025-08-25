// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Students } from './collections/Students'
import { Mentors } from './collections/Mentors'
import { Tracks } from './collections/Tracks'
import { TracksCategory } from './collections/TracksCategory'
import { Articles } from './collections/Articles'
import { Resources } from './collections/Resources'
import { SavedArticles } from './collections/SavedArticles'
import { SavedPosts } from './collections/SavedPosts'
import { Posts } from './collections/Posts'
import { FavouriteTracks } from './collections/FavouriteTracks'
import { Sections } from './collections/Sections'
import { Contacts } from './collections/Contact'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
  baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media , Students , Mentors , Tracks , TracksCategory , Articles , Resources , SavedArticles , SavedPosts , Posts , FavouriteTracks ,Sections , Contacts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
