const Loading = () => {
    return (
        <section className="container mx-auto bg-base-200 px-4 py-8">
            <div className="animate-pulse">

                {/* Heading skeleton */}
                <div className="h-8 w-40 rounded bg-base-300" />

                <div className="mt-2 h-5 w-72 rounded bg-base-300" />

                {/* Cards skeleton */}
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg bg-base-100 shadow"
                        >
                            <div className="h-48 w-full bg-base-300" />

                            <div className="space-y-3 p-4">
                                <div className="h-5 w-3/4 rounded bg-base-300" />
                                <div className="h-4 w-1/2 rounded bg-base-300" />

                                <div className="flex gap-2">
                                    <div className="h-4 w-16 rounded bg-base-300" />
                                    <div className="h-4 w-16 rounded bg-base-300" />
                                </div>

                                <div className="h-10 w-full rounded bg-base-300" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Loading;