"use client"
import { WorkoutContext } from '@/app/context/WorkoutContext';
import { IWorkoutType } from '@/app/types/WorkoutType';
import React, { useContext } from 'react';
import { TbBadge } from 'react-icons/tb';

const SaveWorkoutButton = ({workout}:{workout:IWorkoutType}) => {

    const {saveWorkout, setSaveWorkout} = useContext(WorkoutContext)
    const isAlreadyAdded = saveWorkout.some( (item) => item.id === workout.id );
    
    const handleSaveWorkout = () => {        
        if (isAlreadyAdded) return;
        setSaveWorkout((prev) => [...prev,workout])

    }
    return (
        <button className="btn py-6 px-6 text-base-content border-base-content" onClick={() => handleSaveWorkout()} > <TbBadge /> Save for later</button>
    );
};

export default SaveWorkoutButton;