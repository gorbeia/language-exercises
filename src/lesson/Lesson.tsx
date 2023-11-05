import { useState } from "react";
import Exercise from "../exercise/Exercise";
import { Box, Button, Meter } from "grommet";
import { LessonData } from "./LessonChooser";
import LessonCloseScreen from "./LessonCloseScreen";
function Practice(props: PracticeProps) {
  const [exerciseNumber, nextExercise] = useState(0);

  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const practiceData = props.lesson;

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
  const redStyle = {
    color: "red",
  };
  const greenStyle = {
    color: "green",
  };
  const getComponent = () => {
    if (exerciseNumber >= 0) {
      return (
        <>
          <Box direction="row">
            <Button label="X" onClick={props.onClose} margin="small"></Button>
            <Box fill>
              <Meter
                values={[
                  {
                    value:
                      100 * (exerciseNumber / practiceData.exercises.length),
                    onClick: () => {},
                  },
                ]}
                aria-label="meter"
              />
            </Box>
            <div>
              <span style={greenStyle}>{score.right}</span>/
              <span style={redStyle}>{score.wrong}</span>
            </div>
          </Box>
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
          closeLesson={props.onClose}
          restartLesson={restartLesson}
        ></LessonCloseScreen>
      );
    }
  };
  return getComponent();
}
interface PracticeProps {
  lesson: LessonData;
  onClose: () => void;
}
export default Practice;
