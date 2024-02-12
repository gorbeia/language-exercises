import { useHref } from "react-router-dom";
import { useLessonContext } from "./LessonContext";
import { StyledLessonHeader } from "./StyledLessonHeader";
import Meter from "./Meter";

function LessonHeader(props: LessonHeaderProps) {
  const href = useHref("/");
  const lessonContext = useLessonContext();

  const practiceData = lessonContext.lesson;
  if (practiceData == undefined) {
    return (<div></div>)
  }

  const redStyle = {
    color: "red",
  };

  const greenStyle = {
    color: "green",
  };

  return (
    <StyledLessonHeader>
      <a style={{padding: "4px", textDecoration: "none", fontSize: "150%"}} href={href}>&#10006;</a>
        <Meter
          percent={100 * (props.exerciseNumber / practiceData.exercises.length)}
          aria-label="meter"
        />
      <div>
        <span style={greenStyle}>{props.score.right}</span>/
        <span style={redStyle}>{props.score.wrong}</span>
      </div>
    </StyledLessonHeader>
  );
}
export interface LessonHeaderProps {
  exerciseNumber: number;
  score: {
    right: number;
    wrong: number;
  }
}

export default LessonHeader;
