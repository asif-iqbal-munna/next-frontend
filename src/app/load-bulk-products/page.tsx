import { serverFetch } from "../../service/api/server/serverFetch";
import { MetaResponse } from "../../type/general.types";
import { IProduct } from "../../type/product.types";
import ProductList from "./_libs/views/ProductList";

export const metadata = {
  title: "Rendering & searching over 20k products",
  description:
    "Details implementation rendering and searching strategy of more than 20K items.",
};

export default async function page() {
  const data = await serverFetch<MetaResponse<IProduct>>({
    url: "products/search",
    tags: ["products"],
  });
  const products = data?.data ?? [];

  return <ProductList products={products} />;
}
