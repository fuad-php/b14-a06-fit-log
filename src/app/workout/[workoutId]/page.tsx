import Image from "next/image";
import type { IWorkoutType } from "@/app/types/WorkoutType";
import TodayPlanButton from "@/app/components/workoutDetails/TodayPlanButton";
import SaveWorkoutButton from "@/app/components/workoutDetails/SaveWorkoutButton";

interface IWorkoutDetailPageProps {
    params: Promise<{
        workoutId: string;
    }>;
}

const WorkoutDetailPage = async ({
    params,
}: IWorkoutDetailPageProps) => {
    const { workoutId } = await params;

    const res = await fetch(
        // `https://api.abcz.workers.dev/api/fitlog/${parseInt(workoutId)}`
        `https://api.api-store.workers.dev/api/fitlog/${parseInt(workoutId)}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }

    const workout: IWorkoutType = await res.json();

    const {
        name,
        image,
        muscleGroups,
        equipment,
        difficulty,
        duration,
        caloriesBurned,
        sets,
        reps,
        rating,
        description,
        instructions,
    } = workout;

    return (
        <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <figure className="relative min-h-[280px] overflow-hidden bg-base-200 sm:min-h-[400px] lg:min-h-[650px]">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </figure>


                    <div className="flex flex-col p-5 sm:p-7 lg:p-10">

                        <div className="mb-4 flex flex-wrap gap-2">
                            {muscleGroups.map((muscleGroup) => (
                                <span
                                    key={muscleGroup}
                                    className="badge border-none bg-[#CCFF00] px-3 py-3 font-semibold text-black"
                                >
                                    {muscleGroup}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl font-extrabold uppercase leading-tight text-base-content sm:text-4xl lg:text-4xl">
                            {name}
                        </h1>

                        <p className="mt-4 text-sm leading-7 text-base-content/70 sm:text-base">
                            {description}
                        </p>

                        <div className="mt-6 overflow-hidden rounded-xl border border-base-300">
                            <div className="divide-y divide-base-300">
                                <div className="flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
                                    <span className="text-sm font-semibold uppercase text-base-content/60">
                                        Equipment
                                    </span>
                                    <span className="text-right text-sm font-medium text-base-content">
                                        {equipment}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
                                    <span className="text-sm font-semibold uppercase text-base-content/60">
                                        Difficulty
                                    </span>
                                    <span className="text-sm font-medium text-base-content">
                                        {difficulty}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
                                    <span className="text-sm font-semibold uppercase text-base-content/60">
                                        Sets
                                    </span>
                                    <span className="text-sm font-medium text-base-content">
                                        {sets}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
                                    <span className="text-sm font-semibold uppercase text-base-content/60">
                                        Reps
                                    </span>
                                    <span className="text-sm font-medium text-base-content">
                                        {reps}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
                                    <span className="text-sm font-semibold uppercase text-base-content/60">
                                        Duration
                                    </span>
                                    <span className="text-sm font-medium text-base-content">
                                        {duration} min
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
                                    <span className="text-sm font-semibold uppercase text-base-content/60">
                                        Calories
                                    </span>
                                    <span className="text-sm font-medium text-base-content">
                                        {caloriesBurned} kcal
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 bg-base-200 px-4 py-3">
                                    <span className="text-sm font-semibold uppercase text-base-content/60">
                                        Rating
                                    </span>
                                    <span className="text-sm font-medium text-base-content">
                                         {rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="mt-7">
                            <h2 className="mb-4 text-xl font-bold uppercase text-base-content">
                                Instructions
                            </h2>

                            <ol className="">
                                {instructions.map((instruction, index) => (
                                    <li
                                        key={`${index}-${instruction}`}
                                        className="flex items-start gap-3 rounded-xl bg-base-200 p-4"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-base-content/60">
                                            {index + 1}
                                        </span>

                                        <p className="text-sm leading-6 text-base-content/80">
                                            {instruction}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <TodayPlanButton workout={workout} />
                            <SaveWorkoutButton workout={workout} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetailPage;