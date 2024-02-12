import FillGapsExercise, {
  FillGapsExerciseData,
} from "../fillGapsExercise/FillGapsExercise";
import { useState } from "react";
import ExerciseCheck from "./ExerciseCheck";
import { StyledExercise } from "./StyledExercise";

function Exercise(props: ExerciseProps) {
  const [buttonDisabled, setDisabled] = useState(true);
  const [valid, setValid] = useState(false);
  const [locked, setLocked] = useState(false);

  const nestedProps = {
    ...props,
    filled: (f: boolean) => {
      setDisabled(!f);
    },
    valid: (v: boolean) => {
      setValid(v);
    },
    locked,
  };
  function getComponent(nestedProps: ExerciseProps) {
    if (isFillGapsExercise(nestedProps)) {
      return <FillGapsExercise {...nestedProps}></FillGapsExercise>;
    } else {
      return "e";
    }
  }

  return (
    <StyledExercise>
      {getComponent(nestedProps)}
      <ExerciseCheck disabled={buttonDisabled} valid={valid} continue={props.continue} setLocked={setLocked}></ExerciseCheck>
    </StyledExercise>
  );
}

function isFillGapsExercise(s: ExerciseProps): s is FillGapsExerciseData {
  return s.type === "fillGaps";
}
export interface ExerciseProps {
  type: string;
  continue: (isRight: boolean) => void;
}
export interface NestedExerciseProps {
  filled: (filled: boolean) => void;
  valid: (valid: boolean) => void;
  locked: boolean;
}
export default Exercise;
