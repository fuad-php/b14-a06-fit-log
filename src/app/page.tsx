import Hero from "./components/Hero";
import Workouts from "./components/Workouts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 font-sans ">
      <Hero />
      <Workouts/>
    </div>
  );
}
