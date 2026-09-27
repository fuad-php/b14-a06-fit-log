import React from "react";
import Image from "next/image";
import bannerLogo from "@/app/assets/banner.png";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="container mx-auto bg-base-100 px-4 py-8 sm:px-6 md:px-8 lg:py-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">

                {/* Content */}
                <div className="flex flex-col justify-center gap-4 text-center md:text-left">
                    <span className="text-sm font-bold uppercase text-accent sm:text-base md:text-xl">
                        Workout Library
                    </span>

                    <h2 className="text-3xl font-bold uppercase leading-tight text-base-content sm:text-4xl md:text-5xl">
                        Train with intent. Log every set.
                    </h2>

                    <p className="text-sm leading-relaxed text-base-content/70 sm:text-base md:text-lg">
                        {`FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.`}
                    </p>

                    <div className="pt-2">
                        <Link href="#library">
                            <button className="btn rounded border-transparent bg-accent px-5 font-bold text-base-100 hover:bg-[#b8e600]">
                                Browse Workouts
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center md:justify-end">
                    <Image
                        src={bannerLogo}
                        alt="FitLog workout banner"
                        width={300}
                        height={300}
                        priority
                        className="h-auto w-48 sm:w-60 md:w-64 lg:w-80"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;