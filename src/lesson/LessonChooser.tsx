import { Button } from "grommet";
import { useTranslation } from "react-i18next";
import practiceData from "../data/nork-nor-orainaldia-001.json";

const data = import.meta.glob("../data/*.json");

const imp: LessonData[] = [];

for (const path in data) {
  data[path]().then((mod) => {
    imp.push(mod as LessonData);
  });
}
console.log("imp", imp);

function LessonChooser(props: LessonChooserProps) {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("Choose a lesson")}</h1>
      {imp.map((i, j) => {
        return (
          <Button
            key={j}
            label={i.name}
            onClick={() => props.onChoose(i)}
            margin="small"
          ></Button>
        );
      })}
    </>
  );
}
interface LessonChooserProps {
  onChoose: (lesson: LessonData) => void;
}
export interface LessonData {
  name: string;
  exercises: ExerciseData[];
}

export interface ExerciseData {
  type: string;
}
export default LessonChooser;
