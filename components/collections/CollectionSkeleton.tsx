export default function CollectionSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="flex flex-col h-full bg-[#FFFCF8] rounded-xl overflow-hidden shadow-sm border border-[#F5F0E8]">
                    <div className="aspect-[4/5] w-full bg-[#E8E2D9] animate-pulse" />
                    <div className="p-4 sm:p-5 flex flex-col flex-1 bg-[#FFFCF8]">
                        <div className="h-5 bg-[#E8E2D9] rounded w-3/4 mb-2 animate-pulse" />
                        <div className="h-4 bg-[#E8E2D9] rounded w-1/2 mb-6 animate-pulse" />
                        <div className="flex items-center justify-between mt-auto">
                            <div className="h-5 bg-[#E8E2D9] rounded w-16 animate-pulse" />
                            <div className="hidden sm:block h-4 bg-[#E8E2D9] rounded w-24 animate-pulse" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
