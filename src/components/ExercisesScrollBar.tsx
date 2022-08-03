import { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import {
  exerciseOptions,
  Exercise_DB_URL,
  fetchData,
} from "../utils/fetchData";
import { LeftArrow, RightArrow } from "../libs/ScrollArrows";
import { BodyPart } from "./BodyPart";
import { Loading } from "./Loading";
import { ExerciseCard } from "./ExerciseCard";

interface ExercisesScrollbarProps {
  setBodyPart: (item: string) => void;
  bodyPart: string;
  isBodyParts: boolean;
}

export function ExercisesScrollbar({
  bodyPart,
  setBodyPart,
  isBodyParts,
}: ExercisesScrollbarProps) {
  const [bodyParts, setBodyParts] = useState<string[]>();

  useEffect(() => {
    async function fetchExercisesData() {
      const BodyPartsData = await fetchData(
        `${Exercise_DB_URL}/exercises/bodyPartList`,
        exerciseOptions
      );
      setBodyParts(["all", ...BodyPartsData]);
    }
    fetchExercisesData();
  }, []);

  if (!bodyParts) {
    return <Loading />;
  }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((item, id) => (
        <div key={id} title={item} className="mx-10">
            <BodyPart
              itemId={item}
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
        </div>
      ))}
    </ScrollMenu>
  );
}
