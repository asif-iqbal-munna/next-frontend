import { useAppQuery } from "../../hooks/useAppQuery";
import { PaginatedResponse } from "../../type/general.types";
import { IProduct } from "../../type/product.types";

export const useGetProducts = () => {
  return useAppQuery<PaginatedResponse<IProduct>>({
    key: "products",
    url: "/products/search",
  });
};
