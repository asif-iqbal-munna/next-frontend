/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useOptimistic } from 'react';
import { Button } from '../../../components/ui/button';
import { BlogPost } from '../../../type/blog.types';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import dayjs from 'dayjs';
import { Heart } from 'lucide-react';
import { updateBlogFeaturedAction } from '../../../actions/blog.actions';
import { v4 as uuidv4 } from 'uuid';

const BlogFeaturedAction = ({post}: {post: BlogPost}) => {
  const queryClient = useQueryClient();

  const [optimisticFeatured, addOptimisticFeatured] = useOptimistic(
    post.featured ?? false,
    (state: boolean, newState: boolean) => newState
  );

  const handleToggleFeatured = async () => {
    const newFeaturedState = !optimisticFeatured;
    const idempotencyKey = `${post._id}-${optimisticFeatured ? "featured" : "unFeatured"}-${uuidv4()}`;

    // Immediately show optimistic update
    addOptimisticFeatured(newFeaturedState);

    try {
      // Update the cache optimistically
      await queryClient.cancelQueries({ queryKey: ["blogs"] });
      queryClient.setQueryData(["blogs"], (old: any) => {
        if (!old?.data) return old;
        return {
          ...old,
          data: old.data.map((blogPost: BlogPost) =>
            blogPost._id === post._id
              ? { ...blogPost, featured: newFeaturedState }
              : blogPost
          ),
        };
      });

      // Simulate API call
      const result = await updateBlogFeaturedAction({
        url: `blog/posts/toggle-feature/${post._id}`,
        method: "PUT",
        idempotencyKey
      });

      // Success: Show toast and invalidate cache for fresh data
      toast.success(
        `Blog ${result.featured ? "featured" : "unfeatured"} successfully`,
        {
          description: dayjs().format("dddd, MMMM DD, YYYY [at] h:mm A"),
        }
      );

      // Ensure cache consistency
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

    } catch (error) {
      console.error("Failed to update featured status:", error);
      // Optimistic update automatically reverts on error
      toast.error("Failed to update featured status", {
        description: "Please try again later",
      });
    }
  };

  return (
    <Button
    variant="ghost"
    size="sm"
    onClick={handleToggleFeatured}
    className={`h-8 w-8 p-0 transition-colors ${
      optimisticFeatured
        ? "text-red-500 hover:text-red-600"
        : "text-gray-400 hover:text-red-500"
    }`}
    title={optimisticFeatured ? "Remove from featured" : "Add to featured"}
  >
    <Heart
      className={`h-4 w-4 transition-all duration-200 ${
        optimisticFeatured ? "fill-current scale-110" : ""
      }`}
    />
  </Button>
  );
};

export default BlogFeaturedAction;