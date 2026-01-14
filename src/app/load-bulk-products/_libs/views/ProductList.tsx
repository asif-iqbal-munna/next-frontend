"use client";

import { useOptimizedSearch } from "../../../../hooks/useOptimizedSearch";
import { IProduct } from "../../../../type/product.types";
import ProductFilter from "./ProductFilter";
import VirtualizedProducts from "./VirtualizedProducts";

export default function ProductList({ products }: { products: IProduct[] }) {
  const {
    handleSearch,
    filteredData: filteredProducts,
    isPending,
    query,
  } = useOptimizedSearch<IProduct, keyof IProduct>(products, [
    "name",
    "category",
  ]);
  return (
    <div
      className="flex flex-col w-full bg-white rounded-xl border shadow-sm overflow-hidden"
      style={{ height: "calc(100vh - 180px)" }}
    >
      <ProductFilter
        isPending={isPending}
        filteredProducts={filteredProducts}
        handleSearch={handleSearch}
      />

      {/* Virtualized Scroll Area */}
      <VirtualizedProducts query={query} filteredProducts={filteredProducts} />
    </div>
  );
}
