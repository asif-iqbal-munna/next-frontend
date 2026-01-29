
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Next.js Performance Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive demonstration of modern React rendering strategies, data fetching patterns,
            and performance optimizations for large-scale applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* SSG Home Page */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Static Site Generation (SSG)</h3>
            <p className="text-gray-600 mb-4">
              This home page is pre-built at compile time and served statically, ensuring lightning-fast loading
              with no server processing required.
            </p>
            <div className="text-sm text-green-600 font-medium">
              ⚡ Instant loading • No server calls • SEO optimized
            </div>
          </div>

          {/* ISR Blog Posts */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Incremental Static Regeneration (ISR)</h3>
            <p className="text-gray-600 mb-4">
              Blog posts are statically generated with automatic background regeneration, combining the best of
              static and dynamic content delivery.
            </p>
            <div className="text-sm text-blue-600 font-medium">
              🔄 Auto-updating • Fresh content • Fast delivery
            </div>
          </div>

          {/* Data Fetching Strategies */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Data Fetching</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive data fetching patterns including server-side, client-side, and hybrid approaches
              with intelligent caching and error handling.
            </p>
            <div className="text-sm text-purple-600 font-medium">
              🏗️ Multiple strategies • Smart caching • Error resilient
            </div>
          </div>
        </div>

        {/* Performance Showcase */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Performance & UX Optimizations</h2>
            <p className="text-gray-600">
              Enterprise-grade performance improvements with exceptional user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Dataset Size</span>
                <div className="text-right">
                  <div className="text-red-600 font-bold">6MB → 250KB</div>
                  <div className="text-sm text-gray-500">95% reduction</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Response Time</span>
                <div className="text-right">
                  <div className="text-green-600 font-bold">12s → 1.9s</div>
                  <div className="text-sm text-gray-500">84% faster</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">⚡ Virtualization</h4>
                <p className="text-sm text-blue-700">
                  Rendering 20,000+ components efficiently using react-window virtualization,
                  maintaining smooth scrolling and interactions.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">🔍 Advanced Search</h4>
                <p className="text-sm text-green-700">
                  Lightning-fast search across large datasets optimizely,
                  and real-time filtering.
                </p>
              </div>
            </div>
          </div>

          {/* Additional UX Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">🛡️ Idempotency Protection</h4>
              <p className="text-sm text-purple-700">
                Prevents duplicate operations with intelligent key management,
                ensuring data integrity during rapid user interactions.
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">📝 Smart Form Handling</h4>
              <p className="text-sm text-orange-700">
                Comprehensive form validation with real-time feedback,
                contextual error messages, and success confirmations.
              </p>
            </div>

            <div className="p-4 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-900 mb-2">✨ Shimmer UI</h4>
              <p className="text-sm text-teal-700">
                Beautiful loading states with consistent skeleton animations,
                preventing layout shifts and improving perceived performance.
              </p>
            </div>
          </div>
        </div>

        {/* User Experience Showcase */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Exceptional User Experience</h2>
            <p className="text-gray-600">
              Advanced UX patterns that make your application feel professional and polished
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Error Handling</h3>
              <p className="text-sm text-gray-600">
                Contextual error messages with actionable guidance and recovery options.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Success Feedback</h3>
              <p className="text-sm text-gray-600">
                Positive reinforcement with toast notifications and visual confirmations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimistic Updates</h3>
              <p className="text-sm text-gray-600">
                Instant UI feedback with intelligent rollback on errors.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Loading States</h3>
              <p className="text-sm text-gray-600">
                Beautiful shimmer effects that prevent layout shifts and improve perception.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Complete User Journey</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Form submission with validation
                </div>
                <div className="flex items-center text-blue-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Optimistic UI updates
                </div>
                <div className="flex items-center text-purple-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Shimmer loading states
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-orange-600">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Idempotency protection
                </div>
                <div className="flex items-center text-red-600">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  Error boundaries
                </div>
                
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-indigo-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  Accessible feedback
                </div>
                <div className="flex items-center text-teal-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  Success notifications
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="/next-isr"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">📝 ISR Blog Posts</h3>
            <p className="text-gray-600 text-sm">
              Explore incrementally regenerated blog content with publish/unpublish actions,
              form validation, and real-time feedback.
            </p>
          </a>

          <a
            href="/load-bulk-products"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🛍️ Server Products</h3>
            <p className="text-gray-600 text-sm">
              Experience server-side data fetching of 20k+ products with virtualization,
              shimmer loading states, and advanced search.
            </p>
          </a>

          <a
            href="/client-load-bulk-products"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">📱 Client Products</h3>
            <p className="text-gray-600 text-sm">
              Client-side data fetching with React Query, caching, optimistic updates,
              and comprehensive error handling.
            </p>
          </a>

          <a
            href="/data-fetching"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">🔄 Data Fetching Patterns</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive showcase of different data fetching strategies including server components,
              client components, hybrid approaches with loading states, error boundaries, and feedback systems.
            </p>
          </a>

          <a
            href="/multi-step-form"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">📋 Multi-Step Form</h3>
            <p className="text-gray-600 text-sm">
              Production-grade multi-step form with comprehensive validation, error handling,
              progress tracking, and user-friendly feedback throughout the entire process.
            </p>
          </a>
        </div>

        <div className="text-center mt-16">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🛠️ Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Next.js 16</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React Query</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">React Window</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Radix UI</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">Sonner (Toasts)</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">React Hook Form</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Modern React patterns with enterprise-grade UX, performance, and developer experience
          </p>
        </div>
      </div>
    </div>
  );
}
