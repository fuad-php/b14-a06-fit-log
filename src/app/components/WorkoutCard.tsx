import Image from "next/image";
import Link from "next/link";
import type { IWorkoutType } from "../types/WorkoutType";
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";

interface WorkoutProps {
    workout: IWorkoutType;
}

const WorkoutCard = ({ workout }: WorkoutProps) => {
    return (
        <article className="group h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
            <Link
                href={`/workout/${workout.id}`}
                className="flex h-full flex-col"
            >

                <figure className="relative aspect-[16/10] w-full overflow-hidden bg-base-200">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />                    
                </figure>


                <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscleGroup) => (
                            <span
                                key={muscleGroup}
                                className="badge border-none bg-[#CCFF00] px-3 py-3 text-xs font-semibold text-black"
                            >
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    <h2 className="mt-3 line-clamp-1 text-lg font-bold text-base-content sm:text-xl">
                        {workout.name}
                    </h2>

                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-base-content/60">
                        {workout.equipment}
                    </p>

                    <div className="mt-4 grid grid-cols-3 divide-x divide-base-300 rounded-xl bg-base-200 p-3">
                        <div className="flex flex-col items-center gap-1 px-1 text-center">
                            <LuClock3 className="text-base-content/60" />
                            <span className="text-xs text-base-content/60">
                                Duration
                            </span>

                            <span className="text-xs font-bold text-base-content sm:text-sm">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 px-1 text-center">
                            <FaFire className="text-base-content/60" />

                            <span className="text-xs text-base-content/60">
                                Calories
                            </span>

                            <span className="text-xs font-bold text-base-content sm:text-sm">
                                {workout.caloriesBurned}
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 px-1 text-center">
                            <MdOutlineStarBorder className="text-base-content/60" />

                            <span className="text-xs text-base-content/60">
                                Rating
                            </span>

                            <span className="text-xs font-bold text-base-content sm:text-sm">
                                {workout.rating}
                            </span>
                        </div>
                    </div>                    
                </div>
            </Link>
        </article>
    );
};

export default WorkoutCard;