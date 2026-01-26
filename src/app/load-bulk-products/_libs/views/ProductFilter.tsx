import { useState } from "react";
import { IProduct } from "../../../../type/product.types";
import { exportProductsToCSV } from "../../../../utils/productCsvExport";

const ProductFilter = ({
  filteredProducts,
  handleSearch,
  isPending,
}: {
  filteredProducts: IProduct[];
  handleSearch: (v: string) => void;
  isPending: boolean;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col gap-3 p-4 border-b bg-slate-50/50">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <input
            className="w-full pl-4 pr-10 py-2 border rounded-md bg-white text-sm ring-offset-background focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="Search 20,000+ items..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          {isPending && (
            <div className="absolute right-3 top-2.5">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
            </div>
          )}
        </div>
        <button
          onClick={() => exportProductsToCSV(filteredProducts)}
          className="h-9 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-bold transition-colors"
        >
          Export
        </button>
      </div>
      <div className="flex justify-between items-center px-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Products
        </span>
        <span className="text-xs font-medium text-slate-500">
          {filteredProducts.length.toLocaleString()} matches found
        </span>
      </div>
    </div>
  );
};

export default ProductFilter;
