import Image from 'next/image';
import { LuNotebookPen } from 'react-icons/lu';
import { TbBadge } from 'react-icons/tb';
import { IWorkoutType } from '@/app/types/WorkoutType';
interface IWorkoutDetailPageProps{
    params : Promise <{
        workoutId : string
    }>;
}
const WorkoutDetailPage = async ({params}:IWorkoutDetailPageProps) => {
    const { workoutId } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${parseInt(workoutId)}`);
    const workout:IWorkoutType = await res.json();
    const { name,image,muscleGroups,equipment,difficulty,duration,caloriesBurned,sets,reps,rating,description,instructions } = workout;

    
    return (
        <div className='container mx-auto my-6'>
            <div className="grid grid-cols-2 gap-6 bg-base-100 shadow-sm p-4">
                <figure>
                    <Image
                    src={image}
                    alt={name} 
                    height={700}
                    width={700}
                    className='w-full object-cover rounded-2xl'
                    />
                </figure>
                <div className="flex flex-col gap-6">
                    <h2 className="uppercase text-base-content text-4xl">{name}</h2>
                    <p className='text-base-content'>{description}</p>
                    <div className="flex gap-2">
                        {muscleGroups.map((muscleGroup) => (
                            <span key={muscleGroup} className="badge bg-[#CCFF00] badge-outline">
                                {muscleGroup}
                            </span>
                        ))}
                    </div>
                    <div className='flex flex-col bg-base-100 rounded border-2xl border-base-200 px-2'>
                        <ul className='flex justify-between px-2 py-2 bg-base-200'>
                            <li className='text-base-content uppercase'>equipment</li>
                            <li className='text-base-content'>{equipment}</li>
                        </ul>
                        <ul className='flex justify-between px-2 py-2 bg-base-200'>
                            <li className='text-base-content uppercase'>difficulty</li>
                            <li className='text-base-content'>{difficulty}</li>
                        </ul>
                        <ul className='flex justify-between px-2 py-2 bg-base-200'>
                            <li className='text-base-content uppercase'>sets</li>
                            <li className='text-base-content'>{sets}</li>
                        </ul>
                        <ul className='flex justify-between px-2 py-2 bg-base-200'>
                            <li className='text-base-content uppercase'>reps</li>
                            <li className='text-base-content'>{reps}</li>
                        </ul>
                        <ul className='flex justify-between px-2 py-2 bg-base-200'>
                            <li className='text-base-content uppercase'>Duration</li>
                            <li className='text-base-content'>{duration}</li>
                        </ul>
                        <ul className='flex justify-between px-2 py-2 base-outline bg-base-200'>
                            <li className='text-base-content uppercase'>Calories</li>
                            <li className='text-base-content'>{caloriesBurned}</li>
                        </ul>
                        <ul className='flex justify-between px-2 py-2 base-outline bg-base-200'>
                            <li className='text-base-content uppercase'>Rating</li>
                            <li className='text-base-content'>{rating}</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className='uppercase text-base-content py-2 px-4'>instructions</h3>
                        <ol className='flex flex-col gap-4'>
                        {instructions.map((instruction,ind) => (
                            <li key={instruction} className="badge text-base-content">
                                {`${ind+1}.  ${instruction}`}
                            </li>
                        ))}
                        </ol>
                    </div>
                    <div className="justify-start flex gap-4">
                    <button className="btn py-6 px-6 rounded bg-[#CCFF00] text-base-100"><LuNotebookPen /> {"Add to today's plan"}</button>
                    <button className="btn py-6 px-6 text-base-content border-base-content"> <TbBadge /> Save for later</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;