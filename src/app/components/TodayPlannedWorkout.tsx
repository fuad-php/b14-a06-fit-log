import Link from 'next/link';
import { IWorkoutType } from '../types/WorkoutType';
import Image from 'next/image';
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { Dispatch, SetStateAction } from 'react';
import { TiTick } from 'react-icons/ti';

interface ITodayPlannedWorkoutProps {
    todayPlan : IWorkoutType[];
    setTodayPlan: Dispatch<SetStateAction<IWorkoutType[]>>
}

const TodayPlannedWorkout = ({todayPlan,setTodayPlan} : ITodayPlannedWorkoutProps) => {
    const handleMarkDone = (id : number) => {
        setTodayPlan((prev) => {
           return prev.filter((workout) => workout.id !== id)
        });

    }
    return (
        <div>
            {
                todayPlan.length > 0 ? (
                    todayPlan.map((workout) => {
                        return (
                            <div key={workout.id} className='flex gap-2 justify-between border-base-300 my-2'>                                        
                                <div className='flex gap-4'>
                                    <Image 
                                    src={workout.image}
                                    width = {200}
                                    height = {200}
                                    alt="image"
                                    />
                                    <div className='flex flex-col justify-center gap-4'>
                                        <h3 className='text-xs font-bold text-base-content uppercase sm:text-sm lg:text-3xl'>{workout.name}</h3>
                                        <p className="text-base-content/60">{workout.equipment}</p>
                                        <div className='flex gap-4'>
                                            <span className="flex gap-2 items-center text-xs font-bold text-accent sm:text-sm">
                                            <LuClock3 className="text-accent/60" /> {workout.duration} min
                                            </span>
                                            <span className="flex gap-2 items-center text-xs font-bold text-accent sm:text-sm">
                                                <FaFire className="text-accent/60" />    {workout.caloriesBurned}
                                            </span>
                                            <span className='flex gap-2 items-center text-xs font-bold text-accent sm:text-sm'>
                                                <MdOutlineStarBorder className="text-accent/60" /> {workout.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <Link href={`/workout/${workout.id}`}>                                    
                                        <button className='btn rounded-4xl border-base-content/60 text-base-content'>View details</button>
                                    </Link>
                                    <button className='btn rounded-4xl text-base-100 bg-accent' onClick={() => handleMarkDone(workout.id)}><TiTick /> Mark as done</button>
                                </div>
                            </div>
                        )
                    })
                ): (
                    <div className='text-center'>
                        <h3 className='uppercase text-3xl text-base-content my-10'>Nothing Here Yet</h3>
                        <p className='text-base-content/60 my-4'>Browse the library and add a lift to get today moving.</p>
                        <Link href={`/`}>
                            <button className = "rounded-4xl text-base-100 bg-accent px-4 py-2">Go to workouts</button>
                        </Link>
                    </div>
                ) 
            }
        </div>
    );
};

export default TodayPlannedWorkout;