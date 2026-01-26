"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  MoreHorizontal,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { BlogPost } from "@/type/blog.types";
import { toast } from "sonner";
import { useAppMutation } from "../../../hooks/useAppMutation";
import dayjs from "dayjs";
import { updateBlogStatusAction } from "../../../actions/blog.actions";
import { v4 as uuidv4 } from 'uuid';

interface BlogActionsProps {
  post: BlogPost;
}

export const BlogActions = ({ post }: BlogActionsProps) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [controlDuplication, setControlDuplication] = useState(false);
  const [pendingAction, setPendingAction] = useState<
    "publish" | "unpublish" | null
  >(null);

  const idempotencyKey = useMemo(() => {
    return `${post._id}-${post.published ? "unPublish" : "publish"}-${uuidv4()}`;
  }, [post.published])

  const { mutateAsync: updateBlogStatusOpt, isPending } = useAppMutation({
    mutationFn: () =>
      updateBlogStatusAction({
        url: `blog/posts/update-status/opt/${post._id}`,
        method: "PUT",
        idempotencyKey
      }),
  });

  const { mutateAsync: updateBlogStatus } = useAppMutation({
    mutationFn: () =>
      updateBlogStatusAction({
        url: `posts/update-status/${post._id}`,
        method: "PUT",
      }),
  });

  const handleAction = (
    action: "publish" | "unpublish",
    handleDuplication = true
  ) => {
    setControlDuplication(handleDuplication);
    setPendingAction(action);
    setShowConfirmDialog(true);
  };

  const confirmAction = async () => {
    try {
      if(isPending) return
      if (controlDuplication) {
        await updateBlogStatusOpt();
      } else {
        await updateBlogStatus();
      }
      toast.success("Data has been updated", {
        description: dayjs().format("dddd, MMMM DD, YYYY [at] h:mm A"),
        action: {
          label: "Undo",
          onClick:async () => {
            if (controlDuplication) {
              await updateBlogStatusOpt();
            } else {
              await updateBlogStatus();
            }
          },
        },
      });
    } catch (error) {
      console.error("Failed to update blog status:", error);
      toast.error("Not able to update data");
    } finally {
      setShowConfirmDialog(false);
      setPendingAction(null);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {post.published ? (
            <DropdownMenuItem
              title="Handle duplication"
              onClick={() => handleAction("unpublish")}
              className="text-green-600 hover:text-green-700 focus:text-green-700"
            >
              <EyeOff className="mr-2 h-4 w-4" />
              Unpublish
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              title="Handle duplication"
              onClick={() => handleAction("publish")}
              className="text-green-600 hover:text-green-700 focus:text-green-700"
            >
              <Eye className="mr-2 h-4 w-4" />
              Publish
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {pendingAction === "publish"
                ? "Publish Blog Post"
                : "Unpublish Blog Post"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {pendingAction} &quot;{post.title}&quot;?
              {pendingAction === "publish"
                ? " This will make the blog post visible to readers."
                : " This will hide the blog post from readers."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer" disabled={isPending}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction}
              className={
                "cursor-pointer bg-orange-600 hover:bg-orange-700 focus:ring-orange-600"
              }
            >
              {pendingAction === "publish" ? "Publish" : "Unpublish"}
            </AlertDialogAction>
            <AlertDialogAction
              onClick={confirmAction}
              disabled={isPending}
              className={
                "cursor-pointer bg-green-600 hover:bg-green-700 focus:ring-green-600"
              }
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {pendingAction === "publish" ? "Publish" : "Unpublish"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
