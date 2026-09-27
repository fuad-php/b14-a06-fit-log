import { Suspense } from "react";
import Hero from "./components/Hero";
import Workouts from "./components/Workouts";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 font-sans ">
      <Hero />
      <Suspense fallback={<Loading/>}>
        <Workouts/>
      </Suspense>
    </div>
  );
}
