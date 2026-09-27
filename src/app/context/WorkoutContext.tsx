"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IWorkoutType } from "../types/WorkoutType";

interface IWorkoutContextProps {
  todayPlan: IWorkoutType[];
  setTodayPlan: Dispatch<SetStateAction<IWorkoutType[]>>;
  saveWorkout: IWorkoutType[];
  setSaveWorkout: Dispatch<SetStateAction<IWorkoutType[]>>;
}

export const WorkoutContext = createContext<IWorkoutContextProps>(
  {} as IWorkoutContextProps
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkoutType[]>([]);
  const [saveWorkout, setSaveWorkout] = useState<IWorkoutType[]>([]);

  const sharedData: IWorkoutContextProps = {
    todayPlan,
    setTodayPlan,
    saveWorkout,
    setSaveWorkout,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;