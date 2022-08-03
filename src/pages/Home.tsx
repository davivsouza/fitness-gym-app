import { useState } from "react";
import { Exercises } from "../components/Exercises";
import { HeroBanner } from "../components/HeroBanner";
import { SearchExercises } from "../components/SearchExercises";
import { ExerciseDataFilter } from "../utils/searchDataFilter";

export interface ExerciseData extends ExerciseDataFilter {
  id?: string;
  gifUrl?: string;
}

export function Home(){
  const [bodyPart,setBodyPart] = useState("all")
  const [exercises, setExercises] = useState<ExerciseData[] >();

  return(
    <main className="flex flex-col ">
      <HeroBanner/>
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
      <Exercises exercises={exercises} bodyPart={bodyPart} setExercises={setExercises}/>
    </main>
  )
}