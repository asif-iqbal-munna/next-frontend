import { serverFetch } from "../../service/api/server/serverFetch";
import { BlogPost } from "../../type/blog.types";
import { PaginatedResponse } from "../../type/general.types";
import { BlogItem } from "./views/BlogItem";
import { FeaturedBlogs } from "./views/FeaturedBlogs";
import PageWrapper from "../../components/layout/PageWrapper";

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
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = response?.data

  return (
    <PageWrapper className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - 70% width */}
        <div className="lg:w-8/12">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Articles</h1>
            <p className="text-gray-600">
              Explore our comprehensive collection of business articles covering 1000+ niches
            </p>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <BlogItem key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles available at the moment.</p>
            </div>
          )}
        </div>

        {/* Featured Blogs Sidebar - 30% width */}
        <div className="lg:w-4/12">
          <FeaturedBlogs featuredPosts={featuredPosts} />
        </div>
      </div>
    </PageWrapper>
  );
}
