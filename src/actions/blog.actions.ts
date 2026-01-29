"use server";

import { revalidateTag } from "next/cache";
import { serverFetch } from "../service/api/server/serverFetch";
import { BlogPost } from "../type/blog.types";

export async function updateBlogStatusAction({
  url,
  method,
  idempotencyKey,
}: {
  url: string;
  method: string;
  idempotencyKey?: string;
}) {
  await serverFetch({ url, method, idempotencyKey });
  revalidateTag("blogs", "default");
}

export async function updateBlogFeaturedAction({
  url,
  method,
  idempotencyKey,
}: {
  url: string;
  method: string;
  idempotencyKey?: string;
}) {
  const result = await serverFetch({ url, method, idempotencyKey });
  revalidateTag("blogs", "default");

  return result as BlogPost
}
