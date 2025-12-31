export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header skeleton (matches your Events header) */}
          <div className="text-center mb-16">
            <div className="mx-auto h-10 w-64 rounded bg-gray-200 animate-pulse" />
            <div className="mx-auto mt-4 h-5 w-[36rem] max-w-full rounded bg-gray-200 animate-pulse" />
          </div>

          {/* Cards grid skeleton (matches your grid layout) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="h-44 w-full bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-6 w-3/4 rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-1/3 rounded bg-gray-200 animate-pulse" />
                  <div className="mt-6 h-11 w-full rounded-xl bg-gray-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
