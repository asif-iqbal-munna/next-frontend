import { useRef } from "react";
import { IProduct } from "../../../../type/product.types";
import { useVirtualizer } from "@tanstack/react-virtual";
import ProductRow from "./ProductRow";

const VirtualizedProducts = ({
  filteredProducts,
  query,
}: {
  filteredProducts: IProduct[];
  query: string;
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: filteredProducts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64,
    overscan: 10,
  });

  return (
    <div className="flex-1 relative bg-white">
      <div
        ref={parentRef}
        className="absolute inset-0 overflow-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <ProductRow
              key={virtualRow.key}
              virtualRow={virtualRow}
              product={filteredProducts[virtualRow.index]}
              query={query}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedProducts;
