import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { IWorkoutType } from "../types/WorkoutType";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

interface ISavedWorkoutProps {
    saveWorkout: IWorkoutType[];
    setSaveWorkout: Dispatch<SetStateAction<IWorkoutType[]>>;
}

const SavedForLater = ({
    saveWorkout,
    setSaveWorkout,
}: ISavedWorkoutProps) => {
    const handleRemoveSavedWorkout = (id: number) => {
        setSaveWorkout((prev) =>
            prev.filter((workout) => workout.id !== id)
        );

        toast.error("Item removed from list!");
    };

    return (
        <div className="w-full">
            {saveWorkout.length > 0 ? (
                <div className="space-y-4">
                    {saveWorkout.map((workout) => (
                        <div
                            key={workout.id}
                            className="flex flex-col gap-5 rounded-lg border border-base-300 p-4 md:flex-row md:items-center md:justify-between"
                        >
                            {/* Workout information */}
                            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                                {/* Image */}
                                <div className="shrink-0">
                                    <Image
                                        src={workout.image}
                                        width={200}
                                        height={200}
                                        alt={workout.name}
                                        className="h-32 w-full rounded-lg object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex min-w-0 flex-col justify-center gap-2">
                                    <h3 className="truncate text-lg font-bold uppercase text-base-content sm:text-xl lg:text-2xl">
                                        {workout.name}
                                    </h3>

                                    <p className="text-sm text-base-content/60">
                                        {workout.equipment}
                                    </p>

                                    {/* Stats */}
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

                            {/* Actions */}
                            <div className="flex w-full items-center gap-2 sm:w-auto md:shrink-0">
                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="flex-1 sm:flex-none"
                                >
                                    <button className="btn w-full rounded-4xl border-base-content/60 text-base-content sm:w-auto">
                                        View details
                                    </button>
                                </Link>

                                <button
                                    className="btn btn-ghost rounded-full text-base-content"
                                    onClick={() =>
                                        handleRemoveSavedWorkout(workout.id)
                                    }
                                    aria-label={`Remove ${workout.name} from saved workouts`}
                                >
                                    <ImCross size={14} />
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
                        <button className="btn rounded-4xl bg-accent px-5 py-3 font-bold text-base-100">
                            Go to workouts
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SavedForLater;