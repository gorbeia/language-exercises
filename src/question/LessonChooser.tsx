import { Button } from "grommet";
import { useTranslation } from 'react-i18next';
import practiceData from "../data/nork-nor-orainaldia-001.json";

function LessonChooser(props: LessonChooserProps) {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('Choose a lesson')}</h1>
      <Button
        label="Nork nor orainaldia"
        onClick={() => props.onChoose(practiceData)}
      ></Button>
    </>
  );
}
interface LessonChooserProps {
  onChoose: (lesson: LessonData) => void;
}
export interface LessonData {
  exercises: ExerciseData[];
}

export interface ExerciseData {
    type: string;
  }
export default LessonChooser;
