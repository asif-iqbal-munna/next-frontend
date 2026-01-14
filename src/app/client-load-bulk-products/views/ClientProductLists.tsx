"use client";

import { useGetProducts } from "../../../service/apiHooks/useProductApi";
import ProductList from "../../load-bulk-products/_libs/views/ProductList";

const ClientProductLists = () => {
  const { data } = useGetProducts();

  const products = data?.data ?? [];
  return <ProductList products={products} />;
};

export default ClientProductLists;
