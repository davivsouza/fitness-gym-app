import { ExerciseData } from "../../pages/Home";

import bodyPartIcon from "../../assets/icons/body-part.png";
import equipmentIcon from "../../assets/icons/equipment.png";
import targetIcon from "../../assets/icons/target.png";

interface ExerciseDetailsData extends ExerciseData {}

interface DetailsProps {
  exerciseDetail?: ExerciseDetailsData;
}

export function Details({ exerciseDetail }: DetailsProps) {
  if (!exerciseDetail) {
    return <h1>Carregando...</h1>;
  }

  const extraDetail = [
    {
      icon: bodyPartIcon,
      name: exerciseDetail?.bodyPart,
    },
    {
      icon: equipmentIcon,
      name: exerciseDetail?.equipment,
    },
    {
      icon: targetIcon,
      name: exerciseDetail?.target,
    },
  ];

  return (
    <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row gap-14 p-5 items-center ">
      <img
        src={exerciseDetail.gifUrl}
        alt={exerciseDetail.name}
        className="w-full h-full lg:w-[700px] lg:h-[720px] mx-auto"
        loading="lazy"
      />
      <div className="flex flex-col gap-5 lg:gap-10">
        <h1 className="font-bold text-3xl">{exerciseDetail.name}</h1>
        <p>
          Exercise keep you strong. {exerciseDetail.name} is one of the best
          exercise to target your {exerciseDetail.target}. It will help you
          improve your mood and gain energy
        </p>

        {extraDetail.map((extraDetail, idx) => (
          <div className="flex gap-3 items-center" key={idx}>
            <button className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100">
              <img
                className="w-10 h-10"
                src={extraDetail.icon}
                alt={extraDetail.name}
              />
            </button>
            <span className="capitalize ">{extraDetail.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
