export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  author: string;
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
}
