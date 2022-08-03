import { useState } from "react";
import { ExerciseData } from "../pages/Home";
import { fetchData, exerciseOptions, Exercise_DB_URL } from "../utils/fetchData";
import { searchDataFilter } from "../utils/searchDataFilter";

import { ExercisesScrollbar } from "./ExercisesScrollBar";

interface SearchExercisesProps {
  setExercises: (exercise: ExerciseData[]) => void;
  setBodyPart: (item:string) => void;
  bodyPart: string;
}

export function SearchExercises({
  bodyPart,
  setBodyPart,
  setExercises,
}: SearchExercisesProps) {

  const [search, setSearch] = useState("");

  async function handleSearch() {
    if (search) {
      try {
        const exerciseSearchData = await fetchData(`${Exercise_DB_URL}/exercises`,exerciseOptions);
        const searchedExercises = searchDataFilter(exerciseSearchData, search);

        setSearch("");
        setExercises(searchedExercises);

        window.scrollTo({top:1200, behavior:'smooth'})
        
      } catch (error: any) {
        console.error({
          status: error.response.status,
          message: error.response.data.message,
        });
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-5">
      <strong className="w-[410px] text-4xl text-center leading-relaxed">
        Awesome Exercises You Should Know
      </strong>
      <div className=" flex items-center justify-center mt-10 mb-5">
        <input
          type="text"
          className=" w-52 h-12 sm:w-96 lg:w-[900px] sm:text-sm lg:text-lg px-8 rounded-tl-[4px] rounded-bl-[4px]  border-t border-l border-b border-red-200"
          placeholder="Search exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="h-12 px-8 text-white sm:text-sm lg:text-lg rounded-[4px] bg-red-600 hover:bg-red-700 transition-colors duration-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="relative w-full p-5 ">
        <ExercisesScrollbar  bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </div>
    </div>
  );
}
