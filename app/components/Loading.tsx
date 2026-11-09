
export default function Loading() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* Skeleton Suhu */}
      <div className="animate-pulse rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded bg-gray-700" />
          <div className="h-10 w-10 rounded-xl bg-cyan-500/20" />
        </div>

        <div className="mt-6 flex items-end gap-2">
          <div className="h-9 w-20 rounded bg-gray-700" />
          <div className="mb-1 h-4 w-8 rounded bg-gray-700" />
        </div>

        <div className="mt-4 h-3 w-32 rounded bg-gray-800" />
      </div>

      {/* Skeleton LDR */}
      <div className="animate-pulse rounded-2xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded bg-gray-700" />
          <div className="h-10 w-10 rounded-xl bg-yellow-500/20" />
        </div>

        <div className="mt-6 flex items-end gap-2">
          <div className="h-9 w-20 rounded bg-gray-700" />
          <div className="mb-1 h-4 w-8 rounded bg-gray-700" />
        </div>

        <div className="mt-4 h-3 w-32 rounded bg-gray-800" />
      </div>

      {/* Skeleton Jarak */}
      <div className="animate-pulse rounded-2xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded bg-gray-700" />
          <div className="h-10 w-10 rounded-xl bg-purple-500/20" />
        </div>

        <div className="mt-6 flex items-end gap-2">
          <div className="h-9 w-20 rounded bg-gray-700" />
          <div className="mb-1 h-4 w-8 rounded bg-gray-700" />
        </div>

        <div className="mt-4 h-3 w-32 rounded bg-gray-800" />
      </div>
    </div>
  );
}
