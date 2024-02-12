import { useState } from "react";
import FillGapsOptions from "./FillGapsOptions";
import Phrase from "./Phrase";
import { NestedExerciseProps, ExerciseProps } from "../exercise/Exercise";
import { useTranslation } from "react-i18next";

function FillGapsExercise(exercise: FillGapsExerciseData) {
  const { t } = useTranslation();
  const splitted = exercise.phrase.split(/(\{.*\})/g);
  const segments = [];
  const gaps: string[] = [];
  for (const s of splitted) {
    if (s.startsWith("{")) {
      segments.push({ answer: s.slice(1, -1) });
      gaps.push(s.slice(1, -1));
    } else {
      segments.push(s);
    }
  }
  const checkValid = (selectedOptions: string[], gaps: string[]) => {
    for (let index = 0; index < gaps.length; index++) {
      const gap = gaps[index];
      const selected = selectedOptions[index];
      if (gap != selected) {
        return false;
      }
    }
    return true;
  };
  const optionSelectedCallback = async (option: string) => {
    if (selectedOptions.length >= gaps.length) {
      return;
    }
    await setSelectedOptions(() => {
      exercise.filled(true);
      exercise.valid(checkValid([option], gaps));
      return [option];
    });

    await setRemainingOptions((remainingOptions) =>
      remainingOptions.filter((o) => o !== option)
    );
  };
  const optionClicked = (option: string) => {
    if (exercise.locked) {
      return;
    }
    setSelectedOptions(() => {
      exercise.filled(false);
      exercise.valid(false);
      return [];
    });
    setRemainingOptions((remainingOptions) => {
      if (!remainingOptions.includes(option)) {
        remainingOptions.push(option);
      }
      return remainingOptions;
    });
  };
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [remainingOptions, setRemainingOptions] = useState([
    ...exercise.options,
  ]);
  return (
    <>
      <h2>{t('Fill the gaps')}</h2>
      <div>
        <Phrase
          segments={segments}
          selectedOptions={selectedOptions}
          optionClicked={optionClicked}
        ></Phrase>
      </div>
        <FillGapsOptions
          options={remainingOptions}
          optionSelected={optionSelectedCallback}
        ></FillGapsOptions>
    </>
  );
}

export interface FillGapsExerciseData extends ExerciseProps, NestedExerciseProps {
  phrase: string;
  options: string[];
}

export default FillGapsExercise;
