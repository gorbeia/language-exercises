import { Button } from "grommet";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../AppContext";

const data = import.meta.glob("../data/*.json");

function LessonChooser() {
  const { t } = useTranslation();
  const appContext = useAppContext();
  const [lessons, setLessons] = useState<LessonData[]>([]);
  useEffect(() => {
    const loadedLessons: LessonData[] = [];
    const promises = [];
    for (const path in data) {
      promises.push(data[path]());
    }
    Promise.allSettled(promises).then((results) => {
      for (let index = 0; index < results.length; index++) {
        const result = results[index];
        if (isFulfilled(result)) loadedLessons.push({ ...result.value as object, path: Object.keys(data)[index].slice(8) } as LessonData);

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
            onClick={() => appContext.chooseLesson(i)}
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
