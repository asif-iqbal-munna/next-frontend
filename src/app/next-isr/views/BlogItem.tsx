import dayjs from "dayjs";
import { BlogPost } from "../../../type/blog.types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogActions } from "./BlogActions";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogItem = ({ post }: BlogCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      {/* Header: Tags */}
      {post.tags && post.tags.length > 0 && (
        <CardHeader className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2 pb-0">
            {post.tags.map((tag) => (
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
      )}

      {/* Title */}
      <CardHeader className="pt-2 flex justify-between items-center">
        <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
        <BlogActions post={post} />
      </CardHeader>

      {/* Excerpt */}
      {post.excerpt && (
        <CardContent>
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
      )}

      {/* Footer: Actions + Date + Read More */}
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-xs text-gray-500 dark:text-gray-400">
            {post.publishedAt && (
              <span>{dayjs(post.publishedAt).format("DD MMM YYYY")}</span>
            )}
          </div>
        </div>

        <Button variant="link" size="sm" asChild>
          <a href={`/blog/${post.slug}`}>Read more →</a>
        </Button>
      </CardFooter>
    </Card>
  );
};
