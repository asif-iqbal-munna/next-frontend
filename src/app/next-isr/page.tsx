import { serverFetch } from "../../service/api/server/serverFetch";
import { BlogPost } from "../../type/blog.types";
import { PaginatedResponse } from "../../type/general.types";
import { BlogItem } from "./views/BlogItem";

export const metadata = {
  title: "Business articles",
  description:
    "Explore our comprehensive business articles on more then 1000+ niches",
};

export default async function page() {
  const response = await serverFetch<PaginatedResponse<BlogPost>>({
    url: "blog/posts",
    tags: ["blogs"],
  });

  if (!response) {
    return <h1>no data</h1>;
  }

  const posts = response?.data ?? [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogItem key={post._id} post={post} />
      ))}
    </div>
  );
}
