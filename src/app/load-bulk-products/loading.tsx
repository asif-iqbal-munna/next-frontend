export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
    {/* Search Bar Skeleton */}
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse" />
      <div className="h-12 w-24 bg-gray-200 rounded-lg animate-pulse" />
    </div>

    {/* Header Skeleton */}
    <div className="mb-4 flex items-center justify-between">
      <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
      <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
    </div>

    {/* Product List Skeleton */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
        >
          {/* Left side - Product info */}
          <div className="flex-1 space-y-2">
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
          </div>

          {/* Right side - Price */}
          <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  </div>
  );
}
