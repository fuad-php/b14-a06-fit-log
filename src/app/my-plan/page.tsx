"use client";

import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import TodayPlannedWorkout from "../components/TodayPlannedWorkout";
import SavedForLater from "../components/SavedForLater";

const MyPlanPage = () => {
    const { todayPlan, setTodayPlan, saveWorkout, setSaveWorkout } = useContext(WorkoutContext);
        
    //  todayPlan.map()

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold uppercase text-base-content">
                    My Plan
                </h2>
                <p className="text-base-content/70">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Stats */}
            <div className="flex justify-between stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title text-base-content/60">Exercise</div>
                    <div className="text-base-content stat-value">3</div>                    
                </div>

                <div className="stat">
                    <div className="text-base-content/60 stat-title">Minutes</div>
                    <div className="text-base-content stat-value">4</div>
                    
                </div>

                <div className="stat">
                    <div className="text-base-content/60 stat-title">Calories</div>
                    <div className="text-base-content stat-value">120</div>
                    
                </div>
            </div>

            {/* Tabs + Sort */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                {/* Tabs */}
                <div className="tabs tabs-lift">
                    {/* Today's Plan */}
                    <input
                        type="radio"
                        name="my_tabs"
                        className="tab"
                        aria-label="Today's Plan"
                        defaultChecked
                    />

                    <div className="tab-content border-base-300 bg-base-100 p-4 sm:p-6">
                        <TodayPlannedWorkout todayPlan={todayPlan} setTodayPlan={setTodayPlan} />
                    </div>

                    {/* Saved */}
                    <input
                        type="radio"
                        name="my_tabs"
                        className="tab"
                        aria-label="Saved"
                    />

                    <div className="tab-content border-base-300 bg-base-100 p-4 sm:p-6">
                        <SavedForLater saveWorkout={saveWorkout} setSaveWorkout={setSaveWorkout} />
                    </div>
                </div>

                {/* Sort By */}
                <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="whitespace-nowrap text-sm text-base-content/70">
                        Sort By
                    </label>

                    <select id="sort" defaultValue="" className="select select-sm w-32 bg-base-100">
                        <option value="" disabled>
                            Select
                        </option>
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;