import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

export function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
}

export function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow"/>
    </button>
  );
}
