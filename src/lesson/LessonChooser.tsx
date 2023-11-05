import { Button } from "grommet";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const data = import.meta.glob("../data/*.json");

function LessonChooser(props: LessonChooserProps) {
  const { t } = useTranslation();
  const [lessons, setLessons] = useState<LessonData[]>([]);
  const [count, setCount] = useState<number>(99);
  useEffect(() => {
    console.log("useEffect"); 
    const loadedLessons: LessonData[] = [];
    for (const path in data) {
      data[path]().then((mod) => {
        console.log(path, mod)
        loadedLessons.push(mod as LessonData);
        setCount(loadedLessons.length)
        setLessons(loadedLessons);
      })
    }
  }, []);
  return (
    <>
      <h1>
        {t("Choose a lesson")} {count}
      </h1>
      {lessons.map((i, j) => {
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
