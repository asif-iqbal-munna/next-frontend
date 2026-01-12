import { useAppQuery } from "../../hooks/useAppQuery";
import { PaginatedResponse } from "../../type/general.types";
import { User } from "../../type/user.types";

export const useGetUser = () => {
  return useAppQuery<PaginatedResponse<User>>({
    key: "users",
    url: "/users",
  });
};
