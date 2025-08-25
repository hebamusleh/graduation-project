'use server';

import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function updateUser(userId: string, data: Record<string, unknown>) {
  const payload = await getPayload({ config: await configPromise });

  return payload.update({
    collection: 'users',
    id: userId,
    data, 
  });
}

export async function updateProfile(
  profileCollection: 'mentors' | 'students',
  profileId: string,
  data: Record<string, unknown>
) {
  const payload = await getPayload({ config: await configPromise });

  return payload.update({
    collection: profileCollection,
    id: profileId,
    data, 
  });
}
