/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogPost } from "../../../type/blog.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import dayjs from "dayjs";
import BlogFeaturedAction from "./BlogFeaturedAction";

interface FeaturedBlogsProps {
  featuredPosts: BlogPost[];
}

export const FeaturedBlogs = ({ featuredPosts }: FeaturedBlogsProps) => {
  if (featuredPosts.length === 0) {
    return (
      <div className="sticky top-6">
        <Card className="border-2 border-dashed border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Heart className="w-5 h-5 text-red-500" />
              Featured Articles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-center py-8">
              No featured articles yet. Mark some articles as featured to see them here!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="sticky top-6">
        <Card className="border-2 border-dashed border-gray-200">
          <CardHeader className="flex items-center">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Heart className="w-5 h-5 text-red-500" />
              Featured Articles
            </CardTitle>
            <Badge variant="secondary" className="ml-auto bg-red-100 text-red-700">
              {featuredPosts.length}
            </Badge>
          </CardHeader>
          <CardContent>
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        {featuredPosts.map((post) => (
          <Card key={post._id} className=" hover:shadow-md transition-shadow">
              <CardHeader className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2 pb-0">
                  {post.tags && post.tags.length > 0 &&
                    post.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="uppercase text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Badge>{post.published ? "Published" : "Unpublished"}</Badge>
              </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {post.publishedAt && (
                      <span>{dayjs(post.publishedAt).format("MMM DD, YYYY")}</span>
                    )}
                  </div>

                </div>

                <BlogFeaturedAction post={post} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {featuredPosts.length >= 5 && (
        <div className="text-center text-sm text-gray-500 pt-4 border-t">
          Showing {featuredPosts.length} featured articles
        </div>
      )}
          </CardContent>
        </Card>
      </div>
  )
};