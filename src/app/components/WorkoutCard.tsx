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
        <article className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-xl">
            <Link href={`/workout/${workout.id}`}>
            
                <figure className="relative overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={400}
                        height={350}
                        className="h-60 w-full object-cover"
                    />                
                </figure>

                <div className="card-body p-5">
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscleGroup) => (
                            <span key={muscleGroup} className="badge bg-[#CCFF00] badge-outline">
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    <h2 className="mt-2 line-clamp-1 text-xl font-bold text-base-content">{workout.name}</h2>
                    <p className="line-clamp-2 text-sm leading-6 text-base-content/70">{workout.equipment}</p>
                    <div className="mt-3 grid grid-cols-3 gap-2 rounded-xl bg-base-200 p-3 text-center">
                        <div>
                            <p className="flex gap-2 items-center font-semibold text-base-content">
                            <LuClock3 />  {workout.duration} min
                            </p>
                        </div>

                        <div>
                            <p className="flex gap-2 items-center font-semibold text-base-content">
                            <FaFire />  {workout.caloriesBurned}
                            </p>
                        </div>

                        <div>
                            <p className="flex gap-2 items-center font-semibold text-base-content">
                            <MdOutlineStarBorder />  {workout.rating}
                            </p>
                        </div>
                    </div>                
                </div>
            </Link>
        </article>
    );
};

export default WorkoutCard;