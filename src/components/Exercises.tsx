import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { ExerciseData } from "../pages/Home";
import { exerciseOptions, Exercise_DB_URL, fetchData } from "../utils/fetchData";
import { ExerciseCard } from "./ExerciseCard";

interface ExercisesProps {
  setExercises: (exercise: ExerciseData[]) => void;
  exercises: ExerciseData[] | undefined;
  bodyPart: string;
}

export function Exercises({
  exercises,
  bodyPart,
  setExercises,
}: ExercisesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  useEffect(() => {
    async function fetchExercisesData() {
      try {
        let exercisesData = [];

        if (bodyPart === "all") {
          exercisesData = await fetchData(`${Exercise_DB_URL}/exercises`, exerciseOptions);
          setExercises(exercisesData);
          return;
        }

        exercisesData = await fetchData(`${Exercise_DB_URL}/exercises/bodyPart/${bodyPart}`,exerciseOptions);
        setExercises(exercisesData);
      } catch (error: any) {
        console.error({
          status: error.response.status,
          message: error.response.data.message,
        });
      }
    }

    fetchExercisesData();
  }, [bodyPart]);

  function handlePaginate(event: ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: "smooth" });
  }

  return (
    <div id="exercises" className="mt-8 lg:mt-12 p-5">
      <h1 className="text-4xl mb-12">Showing Results</h1>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6  items-center justify-items-center">
        {currentExercises?.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="flex mt-24 items-center">
        {exercises && exercises.length > 9 && (
          <Pagination
            className="max-w-[900px] mx-auto"
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={handlePaginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
}
