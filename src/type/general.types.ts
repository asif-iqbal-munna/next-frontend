/* eslint-disable @typescript-eslint/no-explicit-any */
export type Option<T> = {
  label: string;
  value: T;
};

export const VIEW_TYPES = {
  TABLE: "table",
  CARD: "card",
} as const;

export type ViewType = (typeof VIEW_TYPES)[keyof typeof VIEW_TYPES];

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface MetaData {
  total: number;
}
export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}
export interface MetaResponse<T> {
  data: T[];
  meta: MetaData;
}

export type ServerFetchOptions = {
  url: string;
  cache?: "force-cache" | "no-store" | "default";
  revalidate?: number;
  tags?: string[];
  params?: Record<string, any>;
  method?: string,
  body?: any,
  idempotencyKey?: string
};
