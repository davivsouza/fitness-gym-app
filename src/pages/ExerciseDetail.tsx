import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../components/ExerciseDetailsComponents/Details";
import { ExerciseVideo } from "../components/ExerciseDetailsComponents/ExerciseVideo";
import { Loading } from "../components/Loading";
import {
  exerciseOptions,
  Exercise_DB_URL,
  fetchData,
  youtubeSearchOptions,
  Youtube_Search_URL,
} from "../utils/fetchData";
import { ExerciseData } from "./Home";

export interface youtubeSearchContentsData {
  video: {
    videoId: string;
    title: string;
    channelName: string;
    thumbnails: {
      url: string;
    }[];
  };
}

export function ExerciseDetail() {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseData>();
  const [youtubeVideos, setYoutubeVideos] =
    useState<youtubeSearchContentsData[]>();

  const [targetMuscleExercises, setTargetMuscleExercises] = useState<ExerciseData[]>();
  const [exercisesEquipments, setExercisesEquipments] = useState<ExerciseData[]>();
  useEffect(() => {
    async function fetchExerciseDetailData() {
      try {
        const exerciseDetailData = await fetchData(
          `${Exercise_DB_URL}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        const youtubeSearchData = await fetchData(
          `${Youtube_Search_URL}/search?query=${exerciseDetailData.name}`,
          youtubeSearchOptions
        );
        setYoutubeVideos(youtubeSearchData.contents);

        const similarTargetExercisesData = await fetchData(
          `${Exercise_DB_URL}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        const similarEquipmentExercisesData = await fetchData(
          `${Exercise_DB_URL}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
          );
          setTargetMuscleExercises(similarTargetExercisesData);
        setExercisesEquipments(similarEquipmentExercisesData);

      } catch (error: any) {
        console.error({
          status: error.response.status,
          message: error.response.data.message,
        });
      }
    }
    fetchExerciseDetailData();
  }, [id]);

  if (!exerciseDetail || !youtubeVideos || !targetMuscleExercises || !exercisesEquipments) {
    window.scrollTo({ top: 0 });
    return <Loading />;
  }

  return (
    <div>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideo={youtubeVideos} name={exerciseDetail.name} />
      
    </div>
  );
}
