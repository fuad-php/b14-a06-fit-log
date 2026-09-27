"use client"
import Link from 'next/link';
import Logo from "@/app/assets/logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const Nav = () => {
    const pathname = usePathname();
    const { todayPlan, saveWorkout } = useContext(WorkoutContext);

    const links = <>
        <li>
            <Link href="/" className={`rounded ${ pathname === "/" ? "text-accent bg-base-200" : "text-base-content/60" }`} >
                Workouts
            </Link>
        </li>
        <li>
            <Link href="/my-plan" className={`rounded ${ pathname === "/my-plan" ? "text-accent" : "text-base-content/60" }`} >
                My Plan
            </Link>
        </li>
    </>

    return (
        <nav className="navbar sticky top-0 z-50 mx-auto max-w-7xl px-4 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" > </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow" >
                        {links}
                    </ul>
                </div>

                <div className='px-4'>
                    <Link className='flex gap-4 items-center' href="/" >
                        <Image
                            src={Logo}
                            height={30}
                            width={30}
                            alt="Logo"
                        />
                        <span className='font-bold text-2xl text-base-content uppercase'>
                            FitLog
                        </span>
                    </Link>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <Link href="/my-plan">
                    <div className="btn flex gap-2">
                        Plan
                        <span className='badge badge-accent badge-sm border-base-200'>
                            {todayPlan.length}
                        </span>
                    </div>
                </Link>

                <Link href="/my-plan">
                    <div className="btn flex gap-2">
                        Saved
                        <span className='badge badge-sm border-base-200'>{saveWorkout.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;