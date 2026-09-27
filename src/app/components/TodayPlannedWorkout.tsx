import Link from 'next/link';
import { IWorkoutType } from '../types/WorkoutType';
import Image from 'next/image';
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { Dispatch, SetStateAction } from 'react';

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
                            <div key={workout.id} className='flex gap-2 justify-between'>                                        
                                <div className='flex gap-4'>
                                    <Image 
                                    src={workout.image}
                                    width = {200}
                                    height = {200}
                                    alt="image"
                                    />
                                    <div className='flex flex-col justify-center'>
                                        <h3 className='text-xs font-bold text-base-content uppercase sm:text-sm lg:text-3xl'>{workout.name}</h3>
                                        <p className="text-base-content/60">{workout.equipment}</p>
                                        <div className='flex gap-2'>
                                            <span className="text-xs font-bold text-base-content sm:text-sm">
                                            <LuClock3 className="text-base-content/60" /> {workout.duration} min
                                            </span>
                                            <span className="text-xs font-bold text-base-content sm:text-sm">
                                                <FaFire className="text-base-content/60" />    {workout.caloriesBurned}
                                            </span>
                                            <span className='text-xs font-bold text-base-content sm:text-sm'>
                                                <MdOutlineStarBorder className="text-base-content/60" /> {workout.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <Link href={`/workout/${workout.id}`}>                                    
                                        <button className='btn rounded text-base-content'>View details</button>
                                    </Link>
                                    <button className='btn rounded text-base-100 bg-base-content' onClick={() => handleMarkDone(workout.id)}>Mark as done</button>
                                </div>
                            </div>
                        )
                    })
                ): (
                    <div>
                        <h3>No saved workout</h3>
                    </div>
                ) 
            }
        </div>
    );
};

export default TodayPlannedWorkout;