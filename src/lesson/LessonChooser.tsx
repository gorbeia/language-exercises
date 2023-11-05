import { Button } from "grommet";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const data = import.meta.glob("../data/*.json");

function LessonChooser(props: LessonChooserProps) {
  const { t } = useTranslation();
  const [lessons, setLessons] = useState<LessonData[]>([]);
  useEffect(() => {
    const loadedLessons: LessonData[] = [];
    const promises = [];
    for (const path in data) {
      promises.push(data[path]());
    }
    Promise.allSettled(promises).then((results) => {
      for (const result of results) {
        if (isFulfilled(result)) loadedLessons.push(result.value as LessonData);
      }
      setLessons(loadedLessons);
    });
  }, []);
  function isFulfilled<T>(
    val: PromiseSettledResult<T>
  ): val is PromiseFulfilledResult<T> {
    return val.status === "fulfilled";
  }
  return (
    <>
      <h1>{t("Choose a lesson")}</h1>
      {lessons.map((i) => {
        return (
          <Button
            key={i.name}
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
