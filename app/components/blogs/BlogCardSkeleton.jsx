import clsx from "clsx";

export default function BlogCardSkeleton() {
  return (
    <div
      className={clsx(
        "rounded-xl overflow-hidden bg-white border border-gray-200 dark:bg-gray-800/40 dark:border-gray-800/90",
        "shadow-sm p-5 md:p-6 animate-pulse w-full"
      )}
    >
      {/* Flex Layout same as actual card */}
      <div
        className={clsx(
          "flex flex-col sm:flex-row md:items-start gap-4 sm:gap-6 md:gap-x-5"
        )}
      >
        {/* 📝 Left: Text Section */}
        <div className="flex-1 order-2 sm:order-1 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
          </div>

          {/* Footer (tags + date) */}
          <div className="flex flex-wrap items-center justify-between text-xs mt-5 gap-y-3">
            <div className="flex gap-2 flex-wrap">
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded-md" />
              <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded-md" />
            </div>
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>

        {/* 🖼️ Right: Image Section */}
        <div
          className={clsx(
            "relative w-full sm:w-1/3 h-56 sm:h-40 md:h-56 rounded-md overflow-hidden order-1 sm:order-2"
          )}
        >
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-md" />
        </div>
      </div>
    </div>
  );
}
