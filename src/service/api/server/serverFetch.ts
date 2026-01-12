/* eslint-disable @typescript-eslint/no-explicit-any */
// export async function serverFetch<T>({
//   url,
//   tags,
//   revalidate = 60,
// }: {
//   url: string;
//   tags?: string[];
//   revalidate?: number;
// }): Promise<T> {
//   const res = await fetch(url, {
//     next: {
//       tags,
//       revalidate,
//     },
//   });

import { ServerFetchOptions } from "../../../type/general.types";

//   if (!res.ok) {
//     throw new Error("Server fetch failed");
//   }

//   return res.json();
// }

// lib/serverFetch.ts

// lib/serverFetch.ts

export async function serverFetch<T = unknown>({
  url,
  cache,
  revalidate,
  tags,
  params,
}: ServerFetchOptions): Promise<T | null> {
  try {
    const query = params
      ? "?" + new URLSearchParams(params as Record<string, string>).toString()
      : "";
    const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}${query}`;

    const fetchOptions: RequestInit & { next?: any } = {};
    if (cache) fetchOptions.cache = cache;

    if (revalidate !== undefined || (tags && tags.length > 0)) {
      fetchOptions.next = {} as any;

      if (revalidate) {
        fetchOptions.next.revalidate = revalidate;
      }

      if (tags && tags.length > 0) {
        fetchOptions.next.tags = tags;
      }
    }

    const res = await fetch(endpoint, fetchOptions);

    if (!res.ok) {
      const text = await res.text();
      console.error(`[serverFetch] ${res.status} ${res.statusText}: ${text}`);
      throw new Error(`Server fetch failed: ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[serverFetch] error:", error);
    }
    return null;
  }
}
