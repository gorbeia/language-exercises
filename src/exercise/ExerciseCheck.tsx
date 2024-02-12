import { Button, Footer } from "grommet";
import { useState } from "react";
import ExerciseResult from "./ExerciseResult";
import { useTranslation } from "react-i18next";

function ExerciseCheck(props: ExerciseCheckProps) {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"empty" | "valid" | "invalid">("empty");


  function checkValid() {
    props.setLocked(true);
    if (props.valid) {
      setStatus("valid");
    } else {
      setStatus("invalid");
    }
  }
  function getBackground() {
    return props.valid == true ? "neutral-1" : "status-error";
  }
  function getButton() {
    if (status === "empty") {
      return (
        <div style={{width: "100%", marginTop: "auto", padding: "20px"}}>
        <Button
          label={t("Check")}
          size="large"
          disabled={props.disabled}
          onClick={checkValid}
        ></Button>
        </div>
      );
    } else {
      return (
        <div style={{width: "100%", marginTop: "auto"}}>
          <Footer direction="column" background={getBackground()} pad="small">
            <ExerciseResult status={status}></ExerciseResult>
            <Button
              label={t("Continue")}
              size="large"
              onClick={() => props.continue(props.valid)}
            ></Button>
          </Footer>
        </div >
      );
  }
}

return (
  <>
    {getButton()}
  </>
);
}

export interface ExerciseCheckProps {
  continue: (isRight: boolean) => void;
  setLocked: (isRight: boolean) => void;
  valid: boolean;
  disabled: boolean;
}
export default ExerciseCheck;
