// @src/utils/csv-export.ts
import { IProduct } from "../type/product.types";

export const exportProductsToCSV = (products: IProduct[]) => {
  if (!products || products.length === 0) {
    alert("No data available to export");
    return;
  }

  // 1. Define Headers
  const headers = ["Name", "Category", "Price", "Stock", "Created At"];

  // 2. Map data to rows
  // We escape commas and quotes to prevent breaking the CSV format
  const rows = products.map((p) => [
    `"${p.name.replace(/"/g, '""')}"`, // Escape quotes
    `"${(p.category || "General").replace(/"/g, '""')}"`,
    p.price,
    p.stock || 0,
    new Date(p.createdAt).toLocaleDateString(),
  ]);

  // 3. Combine into a single string
  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join(
    "\n"
  );

  // 4. Create a Blob (Binary Large Object)
  // This is memory-efficient for 20k+ rows
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  // 5. Trigger Download
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `products_export_${new Date().getTime()}.csv`);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up memory
  URL.revokeObjectURL(url);
};
