export const LocatorSkeleton = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-12 px-6 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex flex-col items-center mb-10">
                <div className="h-10 w-3/4 bg-gray-200 rounded-lg mb-4" />
                <div className="h-6 w-1/2 bg-gray-200 rounded-lg" />
            </div>

            {/* Tabs Skeleton */}
            <div className="flex justify-center gap-4 mb-12">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-24 bg-gray-200 rounded-full" />
                ))}
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-(--radius-pharmacy) h-112.5 shadow-(--shadow-locator)" />
                ))}
            </div>
        </div>
    );
};