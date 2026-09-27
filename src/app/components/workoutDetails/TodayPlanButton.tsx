"use client"
import { WorkoutContext } from '@/app/context/WorkoutContext';
import { IWorkoutType } from '@/app/types/WorkoutType';
import React, { useContext } from 'react';
import { LuNotebookPen } from 'react-icons/lu';

const TodayPlanButton = ({workout}:{workout:IWorkoutType}) => {

    const {todayPlan, setTodayPlan} = useContext(WorkoutContext)
    const isAlreadyAdded = todayPlan.some( (item) => item.id === workout.id );

    const handleTodayPlan = () => {
        if (isAlreadyAdded) return;
        setTodayPlan((prev) => [...prev, workout])

    }
    return (
        <button className="btn py-6 px-6 rounded bg-[#CCFF00] text-base-100" onClick={()=>handleTodayPlan()}><LuNotebookPen /> {"Add to today's plan"}</button>
    );
};

export default TodayPlanButton;