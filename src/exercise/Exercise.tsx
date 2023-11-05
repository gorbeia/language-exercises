import { Button, Footer } from "grommet";
import FillGapsExercise, {
  FillGapsExerciseData,
} from "../fillGapsExercise/FillGapsExercise";
import { useState } from "react";
import ExerciseResult from "./ExerciseResult";
import { useTranslation } from "react-i18next";

function Exercise(props: ExerciseProps) {
  const { t } = useTranslation();
  const [buttonDisabled, setDisabled] = useState(true);
  const [status, setStatus] = useState<"empty" | "valid" | "invalid">("empty");
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
  function checkValid() {
    setLocked(true);
    if (valid) {
      setStatus("valid");
    } else {
      setStatus("invalid");
    }
  }
  function getComponent(nestedProps: ExerciseProps) {
    if (isFillGapsExercise(nestedProps)) {
      return <FillGapsExercise {...nestedProps}></FillGapsExercise>;
    } else {
      return "e";
    }
  }
  function getBackground() {
    return valid == true ? "neutral-1" : "status-error";
  }
  function getButton() {
    if (status === "empty") {
      return (
        <Button
          label={t("Check")}
          size="large"
          disabled={buttonDisabled}
          onClick={checkValid}
        ></Button>
      );
    } else {
      return (
        <Footer direction="column" background={getBackground()} pad="small">
          <ExerciseResult status={status}></ExerciseResult>
          <Button
            label={t("Continue")}
            size="large"
            onClick={() => props.continue(valid)}
          ></Button>
        </Footer>
      );
    }
  }

  return (
    <>
      {" "}
      {getComponent(nestedProps)}
      {getButton()}
    </>
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
