import Link from "next/link";
import { IWorkoutType } from "../types/WorkoutType";
import Image from "next/image";
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";
import { TiTick } from "react-icons/ti";

interface ITodayPlannedWorkoutProps {
    todayPlan: IWorkoutType[];
    setTodayPlan: Dispatch<SetStateAction<IWorkoutType[]>>;
}

const TodayPlannedWorkout = ({
    todayPlan,
    setTodayPlan,
}: ITodayPlannedWorkoutProps) => {
    const handleMarkDone = (id: number) => {
        setTodayPlan((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    return (
        <div className="w-full">
            {todayPlan.length > 0 ? (
                <div className="space-y-4">
                    {todayPlan.map((workout) => (
                        <div
                            key={workout.id}
                            className="flex flex-col gap-5 rounded-lg border border-base-300 p-4 md:flex-row md:items-center md:justify-between"
                        >
                            {/* Workout information */}
                            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="shrink-0">
                                    <Image
                                        src={workout.image}
                                        width={200}
                                        height={200}
                                        alt={workout.name}
                                        className="h-32 w-full rounded-lg object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
                                    />
                                </div>

                                <div className="flex min-w-0 flex-col justify-center gap-2">
                                    <h3 className="truncate text-lg font-bold uppercase text-base-content sm:text-xl lg:text-2xl">
                                        {workout.name}
                                    </h3>

                                    <p className="text-sm text-base-content/60">
                                        {workout.equipment}
                                    </p>

                                    {/* Workout stats */}
                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-accent sm:text-sm">
                                            <LuClock3 className="text-accent/60" />
                                            {workout.duration} min
                                        </span>

                                        <span className="flex items-center gap-1.5 text-xs font-bold text-accent sm:text-sm">
                                            <FaFire className="text-accent/60" />
                                            {workout.caloriesBurned}
                                        </span>

                                        <span className="flex items-center gap-1.5 text-xs font-bold text-accent sm:text-sm">
                                            <MdOutlineStarBorder className="text-accent/60" />
                                            {workout.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto md:shrink-0">
                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="w-full sm:w-auto"
                                >
                                    <button className="btn w-full rounded-4xl border-base-content/60 text-base-content sm:w-auto">
                                        View details
                                    </button>
                                </Link>

                                <button
                                    className="btn w-full rounded-4xl bg-accent text-base-100 sm:w-auto"
                                    onClick={() =>
                                        handleMarkDone(workout.id)
                                    }
                                >
                                    <TiTick size={20} />
                                    Mark as done
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="px-4 py-10 text-center sm:py-16">
                    <h3 className="my-4 text-2xl font-bold uppercase text-base-content sm:text-3xl">
                        Nothing Here Yet
                    </h3>

                    <p className="mx-auto my-4 max-w-md text-sm text-base-content/60 sm:text-base">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link href="/">
                        <button className="btn rounded-4xl bg-accent px-5 text-base-100">
                            Go to workouts
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default TodayPlannedWorkout;