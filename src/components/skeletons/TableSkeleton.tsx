"use client"

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  showHeader?: boolean;
  showActions?: boolean;
  showCheckbox?: boolean;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getConsistentWidth(rowIndex: number, colIndex: number, baseWidth: number, variance: number): string {
  const seed = rowIndex * 1000 + colIndex * 100 + 42; 
  const random = seededRandom(seed);
  return `${baseWidth + random * variance}%`;
}

export default function TableSkeleton({
  rows = 10,
  columns = 5,
  showHeader = true,
  showActions = false,
  showCheckbox = false,
}: TableSkeletonProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          
          {showHeader && (
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {showCheckbox && (
                  <th className="w-12 px-4 py-3">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                  </th>
                )}
                {[...Array(columns)].map((_, index) => (
                  <th key={index} className="px-6 py-3 text-left">
                    <div className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: getConsistentWidth(0, index, 60, 40) }} />
                  </th>
                ))}
                {showActions && (
                  <th className="w-24 px-6 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse ml-auto w-16" />
                  </th>
                )}
              </tr>
            </thead>
          )}

          <tbody className="divide-y divide-gray-200">
            {[...Array(rows)].map((_, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                {showCheckbox && (
                  <td className="w-12 px-4 py-4">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                  </td>
                )}
                {[...Array(columns)].map((_, colIndex) => (
                  <td key={colIndex} className="px-6 py-4">
                    <div
                      className="h-4 bg-gray-200 rounded animate-pulse"
                      style={{
                        width: getConsistentWidth(rowIndex, colIndex, 40, 50),
                        animationDelay: `${rowIndex * 0.05 + colIndex * 0.02}s`
                      }}
                    />
                  </td>
                ))}
                {showActions && (
                  <td className="w-24 px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                      <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}