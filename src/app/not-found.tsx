import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-xl text-center text-base-content">

                <h2 className="mb-5 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">
                    Not Found
                </h2>

                <p className="text-base-content/60 text-base sm:text-lg md:text-xl">
                    Could not find requested resource
                </p>

                <Link
                    href="/"
                    className="btn mt-8 rounded-4xl bg-accent px-5 py-2 text-base-100 sm:mt-10 sm:px-6"
                >
                    Return Home
                </Link>

            </div>
        </main>
    );
}