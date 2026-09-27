import React from 'react';
import Image from 'next/image';
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { IWorkoutType } from '../types/WorkoutType';

interface ISavedWorkoutProps {
    saveWorkout : IWorkoutType[];
}

const SavedForLater = ({saveWorkout}: ISavedWorkoutProps) => {
    return (
        <div>
            {
                saveWorkout.length > 0 ? (
                    saveWorkout.map((workout) => {
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
                                    <button className='btn rounded text-base-content'>View details</button>                                    
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

export default SavedForLater;