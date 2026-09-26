import WorkoutCard from "./WorkoutCard";
import { IWorkoutType } from "../types/WorkoutType";

const Workouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const workoutData: IWorkoutType[] = await res.json();

    return (
        <section className="container mx-auto bg-base-200 px-4 py-8">
            <h2 className="text-2xl font-bold uppercase text-white">
                The Library
            </h2>

            <p className="mt-1 text-gray-400">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {workoutData.map((workout:IWorkoutType) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
};

export default Workouts;