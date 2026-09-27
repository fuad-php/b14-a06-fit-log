"use client";
import { useRef } from "react";
import { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import TodayPlannedWorkout from "../components/TodayPlannedWorkout";
import SavedForLater from "../components/SavedForLater";
import { ChevronDown } from "lucide-react";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
    const {
        todayPlan,
        setTodayPlan,
        saveWorkout,
        setSaveWorkout,
    } = useContext(WorkoutContext);

    // Active tab
    const [activeTab, setActiveTab] =
        useState<"today" | "saved">("today");

    // Sort option
    const [sortBy, setSortBy] =
        useState<SortOption>("duration");

    // Active workouts
    const activeWorkouts =
        activeTab === "today"
            ? todayPlan
            : saveWorkout;

    const sortDropdownRef = useRef<HTMLButtonElement>(null);

    // Sort workouts
    const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
        switch (sortBy) {
            case "calories":
                return b.caloriesBurned - a.caloriesBurned;

            case "rating":
                return b.rating - a.rating;

            case "duration":
            default:
                return b.duration - a.duration;
        }
    });

    // Stats
    const totalCalories = activeWorkouts.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );

    const totalMinutes = activeWorkouts.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold uppercase text-base-content sm:text-3xl">
                    My Plan
                </h2>

                <p className="mt-1 text-sm text-base-content/60 sm:text-base">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Stats */}
            <div className="mb-6 w-full shadow stats stats-vertical sm:stats-horizontal">

                <div className="stat">
                    <div className="stat-title text-base-content/60">
                        Exercise
                    </div>

                    <div className="stat-value text-accent">
                        {activeWorkouts.length}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title text-base-content/60">
                        Minutes
                    </div>

                    <div className="stat-value text-base-content">
                        {totalMinutes}
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title text-base-content/60">
                        Calories
                    </div>

                    <div className="stat-value text-base-content">
                        {totalCalories}
                    </div>
                </div>

            </div>

            {/* Tabs + Sort */}
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Tabs */}
                <div className="tabs tabs-lift">

                    <input
                        type="radio"
                        name="my_tabs"
                        className={`tab py-3 ${
                            activeTab === "today"
                                ? "border-base-content bg-base-300 text-accent"
                                : "text-base-content/60"
                        }`}
                        aria-label="Today's Plan"
                        defaultChecked
                        onChange={() =>
                            setActiveTab("today")
                        }
                    />

                    <input
                        type="radio"
                        name="my_tabs"
                        className={`tab py-3 ${
                            activeTab === "saved"
                                ? "border-base-content bg-base-300 text-accent"
                                : "text-base-content/60"
                        }`}
                        aria-label="Saved"
                        onChange={() =>
                            setActiveTab("saved")
                        }
                    />

                </div>

                {/* Sort */}
                <div className="flex justify-end">
                    <div className="dropdown dropdown-end">
                        <button
                            ref={sortDropdownRef}
                            tabIndex={0}
                            className="btn btn-outline flex items-center gap-2"
                        >
                            <span>Sort By:</span>

                            <span className="font-semibold capitalize">
                                {sortBy}
                            </span>

                            <ChevronDown size={18} />
                        </button>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu z-50 mt-2 w-44 rounded-box bg-base-100 p-2 shadow-lg"
                        >
                            <li>
                                <button
                                    onClick={() => {
                                        setSortBy("duration");
                                        sortDropdownRef.current?.blur();
                                    }}
                                    className={
                                        sortBy === "duration"
                                            ? "active text-accent"
                                            : "text-base-content/60"
                                    }
                                >
                                    Duration
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => {
                                        setSortBy("calories");
                                        sortDropdownRef.current?.blur();
                                    }}
                                    className={
                                        sortBy === "calories"
                                            ? "active text-accent"
                                            : "text-base-content/60"
                                    }
                                >
                                    Calories
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => {
                                        setSortBy("rating");
                                        sortDropdownRef.current?.blur();
                                    }}
                                    className={
                                        sortBy === "rating"
                                            ? "active text-accent"
                                            : "text-base-content/60"
                                    }
                                >
                                    Rating
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Content */}
            <div className="w-full rounded-box border border-base-300 bg-base-100 p-4 sm:p-6">

                {activeTab === "today" ? (
                    <TodayPlannedWorkout
                        todayPlan={sortedWorkouts}
                        setTodayPlan={setTodayPlan}
                    />
                ) : (
                    <SavedForLater
                        saveWorkout={sortedWorkouts}
                        setSaveWorkout={setSaveWorkout}
                    />
                )}

            </div>

        </div>
    );
};

export default MyPlanPage;