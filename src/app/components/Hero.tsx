import React from 'react';
import Image from 'next/image';
import bannerLogo from "@/app/assets/banner.png"
import Link from 'next/link';

const Hero = () => {
    return (      
        <section className='container mx-auto px-8 py-6 bg-base-100'>
            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                <div className='flex flex-col justify-center gap-4'>
                    <span className='text-[#CCFF00] uppercase font-bold text-xl'>Workout Library</span>
                    <h2 className='text-5xl font-bold uppercase text-base-content'>Train with intent. Log every set.</h2>
                    <p className='text-base-content/70'>{"FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up."}</p>
                    <Link href="#library">                    
                        <button className='btn bg-[#CCFF00] text-base-100 font-bold rounded border-transparent'>Browse Workouts</button>
                    </Link>
                </div>
                <div className='flex justify-end items-center'>
                    <Image src={bannerLogo} height={300} width={300} alt="banner image" />
                </div>
            </div>
        </section>  
    );
};

export default Hero;