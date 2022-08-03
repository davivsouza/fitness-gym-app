export interface ExerciseDataFilter {
  name: string;
  equipment: string;
  bodyPart: string;
  target: string;
}

export function searchDataFilter( exerciseData: ExerciseDataFilter[], search: string ) {
  const searchData = exerciseData.filter((exercise) => {
    return exercise.name.toLowerCase().includes(search) 
    || exercise.equipment.toLowerCase().includes(search) 
    || exercise.bodyPart.toLowerCase().includes(search) 
    || exercise.target.toLowerCase().includes(search);
  });
  return searchData
}
