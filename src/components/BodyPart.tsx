import GymIcon from "../assets/icons/gym.png";
interface BodyPartProps {
  itemId: string
  item: string;
  bodyPart: string;
  setBodyPart: (item: string) => void;
}

export function BodyPart({item, bodyPart,setBodyPart}: BodyPartProps) {
  
  return (
    <button
      onClick={()=>{
        setBodyPart(item)
        window.scrollTo({top:1500, left:100, behavior:'smooth'})
      }}
      className={`w-[270px] h-[270px] bg-white  ${bodyPart === item ? 'border-t-4 border-red-600' : ''} rounded-b-lg p-4 flex gap-10 flex-col items-center justify-center text-center pointer `}
    >
      <img src={GymIcon} alt="Body Part Exercise" className="w-14 h-14" />
      <p className="text-base capitalize">{item}</p>
    </button>
  );
}
