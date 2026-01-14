import { ProductSearchHighlighter } from "./ProductSearchHighlighter";
import { IProduct } from "../../../../type/product.types";

interface ProductRowProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  virtualRow: any;
  query: string;
  product: IProduct;
}

const ProductRow = ({ virtualRow, query, product }: ProductRowProps) => {
  return (
    <div
      key={virtualRow.key}
      className={`absolute top-0 left-0 w-full flex items-center px-6 border-b transition-colors hover:bg-blue-50/40 ${
        virtualRow.index % 2 === 0 ? "bg-white" : "bg-slate-50/20"
      }`}
      style={{
        height: `${virtualRow.size}px`,
        transform: `translateY(${virtualRow.start}px)`,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col truncate">
          <span className="text-sm font-semibold text-slate-900 truncate">
            <ProductSearchHighlighter text={product.name} query={query} />
          </span>
          <span className="text-[11px] text-slate-500 uppercase tracking-tighter">
            <ProductSearchHighlighter
              text={product.category || "General"}
              query={query}
            />
          </span>
        </div>
        <div className="text-sm font-mono font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
          ${product.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
