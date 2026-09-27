"use client";

import { useState, useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import TodayPlannedWorkout from "../components/TodayPlannedWorkout";
import SavedForLater from "../components/SavedForLater";

const MyPlanPage = () => {
    const { todayPlan, setTodayPlan, saveWorkout, setSaveWorkout } = useContext(WorkoutContext);

    // Track active tab
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    // Get workouts according to active tab
    const activeWorkouts =
        activeTab === "today" ? todayPlan : saveWorkout;

    // Calculate total calories
    const totalCalories = activeWorkouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    // Calculate total minutes
    const totalMinutes = activeWorkouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold uppercase text-base-content"> My Plan </h2>
                <p className="text-base-content/60">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="mb-6 flex justify-between stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title text-base-content/60"> Exercise </div>
                    <div className="text-accent stat-value">
                        {activeWorkouts.length}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title text-base-content/60"> Minutes </div>
                    <div className="text-base-content stat-value">
                        {totalMinutes}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title text-base-content/60">
                        Calories
                    </div>
                    <div className="text-base-content stat-value">
                        {totalCalories}
                    </div>
                </div>
            </div>

            <div className="gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs" className={`${activeTab === "today" ? "text-base-content border-base-content bg-base-300 " : "text-base-content/60"} py-3 my-2 tab `} aria-label="Today's Plan" defaultChecked onChange={() => setActiveTab("today")} />
                    <div className="tab-content border-base-300 bg-base-100 p-4 sm:p-6">
                        <TodayPlannedWorkout todayPlan={todayPlan} setTodayPlan={setTodayPlan} />
                    </div>

                    <input type="radio" name="my_tabs" className={`${activeTab === "saved" ? "text-base-content border-base-content bg-base-300 " : "text-base-content/60"} p-3 my-2 tab `} aria-label="Saved" onChange={() => setActiveTab("saved")} />

                    <div className="tab-content border-base-300 w-full bg-base-100 p-4 sm:p-6">
                        <SavedForLater saveWorkout={saveWorkout} setSaveWorkout={setSaveWorkout} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;