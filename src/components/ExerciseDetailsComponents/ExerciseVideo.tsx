import { youtubeSearchContentsData } from "../../pages/ExerciseDetail";

export interface ExerciseVideoProps {
  exerciseVideo: youtubeSearchContentsData[];
  name: string ;
}
export function ExerciseVideo({ exerciseVideo, name }: ExerciseVideoProps) {

  return (
    <div className="mt-5 lg:mt-44 p-5 ">
      <p className="text-2xl font-bold mb-7">
        Watch
        <strong className="text-red-600 capitalize"> {name} </strong>
        exercises videos
      </p>
      <div className="flex flex-col lg:flex-row  justify-start items-center  flex-wrap gap-0 lg:gap-28 ">
        {exerciseVideo.slice(0,3).map((item, idx)=>(
          <a 
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            className="flex flex-col  w-80 h-80 no-underline rounded-lg overflow-hidden"
            key={item.video.videoId}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <p className="text-lg mt-4">{item.video.title}</p>
            <p className="text-sm">{item.video.channelName}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
