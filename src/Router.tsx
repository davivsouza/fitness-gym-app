import { Route, Routes } from "react-router-dom";
import { ExerciseDetail } from "./pages/ExerciseDetail";
import { Home } from "./pages/Home";

export function Router(){
  return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
  )
}