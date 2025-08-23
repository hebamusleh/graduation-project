'use server'

import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'

import { UsersSelect } from '@/payload-types'
import configPromise from '@payload-config'

export async function getUser() {
  const headers = await getHeaders();
  const payload = await getPayload({ config: await configPromise });

  // Step 1: Authenticate the request
  const { user } = await payload.auth({ headers });
  if (!user) return null;

  // Step 2: Fetch the full user document using the ID
  const fullUser = await payload.findByID({
    collection: "users",
    id: user.id,
    depth: 1, // includes relationship fields like userId if needed
  });

  // Step 3: Fetch the related profile
  let profile = null;
  const roles = Array.isArray(fullUser.roles)
    ? fullUser.roles
    : [fullUser.roles];

  if (roles.includes("mentor")) {
    const result = await payload.find({
      collection: "mentors",
      where: { userId: { equals: fullUser.id } },
    });
    profile = result.docs[0] || null;
  }

  if (roles.includes("student")) {
    const result = await payload.find({
      collection: "students",
      where: { userId: { equals: fullUser.id } },
    });
    profile = result.docs[0] || null;
  }

  return { ...fullUser, profile };
}
