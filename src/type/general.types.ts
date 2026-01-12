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

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}
