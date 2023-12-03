import { Button } from "grommet";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

function LessonChooser() {
  const appContext = useAppContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("Choose a lesson")}</h1>
      {appContext.lessons?.map((i) => {
        return (
          <Button
            key={i.name}
            label={i.name}
            onClick={()=> navigate("/lesson/" + i.path)}
            margin="small"
          ></Button>
        );
      })}
    </>
  );
}
export interface LessonData {
  path: string;
  name: string;
  exercises: ExerciseData[];
}

export interface ExerciseData {
  type: string;
}
export default LessonChooser;
