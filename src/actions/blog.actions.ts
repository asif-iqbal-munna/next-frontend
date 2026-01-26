"use server";

import { revalidateTag } from "next/cache";
import { serverFetch } from "../service/api/server/serverFetch";

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
