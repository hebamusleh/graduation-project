"use server";

import { headers as getHeaders } from "next/headers";
import type { Payload } from "payload";
import { getPayload } from "payload";

import { UsersSelect } from "@/payload-types";
import configPromise from "@payload-config";

export async function getUser(): Promise<UsersSelect | any | null> {
  const headers = await getHeaders();
  const payload: Payload = await getPayload({
    config: await configPromise,
  });
  const { user } = await payload.auth({
    headers,
  });

  if (!user) return null;

  let profile = null;

  const roles = Array.isArray(user.roles) ? user.roles : [user.roles];

  if (roles.includes("mentor")) {
    profile = await payload.find({
      collection: "mentors",
      where: { userId: { equals: user.id } },
    });
  }

  if (roles.includes("student")) {
    profile = await payload.find({
      collection: "students",
      where: { userId: { equals: user.id } },
    });
  }

  return { ...user, profile: profile?.docs?.[0] || null };
}
