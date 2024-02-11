import { useState } from "react";
import Exercise from "../exercise/Exercise";
import LessonCloseScreen from "./LessonCloseScreen";
import { useLessonContext } from "./LessonContext";
import LessonHeader from "./LessonHeader";

function Practice() {
  const lessonContext = useLessonContext();
  const [exerciseNumber, nextExercise] = useState(0);

  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const practiceData = lessonContext.lesson;
  if (practiceData == undefined) {
    return(<div>Loading</div>)
  }

  const next = (right: boolean) => {
    if (right) {
      setScore((score) => {
        score.right++;
        return score;
      });
    } else {
      setScore((score) => {
        score.wrong++;
        return score;
      });
    }
    nextExercise(() => {
      if (practiceData.exercises.length > exerciseNumber + 1) {
        return exerciseNumber + 1;
      } else {
        return -1;
      }
    });
  };
  const restartLesson = () => {
    setScore({ right: 0, wrong: 0 });
    nextExercise(0);
  };

  const getComponent = () => {
    if (exerciseNumber >= 0) {
      return (
        <>
          <div>
            <LessonHeader score={score} exerciseNumber={exerciseNumber}></LessonHeader>
          </div>
          <Exercise
            key={exerciseNumber}
            {...practiceData.exercises[exerciseNumber]}
            continue={next}
          ></Exercise>
        </>
      );
    } else {
      return (
        <LessonCloseScreen
          right={score.right}
          wrong={score.wrong}
          restartLesson={restartLesson}
        ></LessonCloseScreen>
      );
    }
  };
  return getComponent();
}
export default Practice;
