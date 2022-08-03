import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ExerciseData } from "../pages/Home"

interface ExerciseCardProps{
  exercise: ExerciseData | any
}

export function ExerciseCard({exercise}: ExerciseCardProps){
  useEffect(()=>{
    
  },[])
  return (
    <Link to={`/exercise/${exercise.id}`} className="bg-white border-t-4  border-red-600">
      <img src={exercise.gifUrl} alt={exercise.name}  loading="lazy"/>
      <div className="flex items-center ">
        <button className="w-auto ml-5 text-white bg-[#ffa9a9] text-sm rounded-[20px] capitalize px-3 py-1">
          {exercise.bodyPart}
        </button>
        <button className="w-auto ml-2 text-white bg-[#fcc757] text-sm rounded-[20px] capitalize px-3 py-1">
          {exercise.target}
        </button>
      </div>
      <p className="ml-5 text-black font-bold mt-3 pb-3 capitalize text-lg">
        {exercise.name}
      </p>
    </Link>
  )

}