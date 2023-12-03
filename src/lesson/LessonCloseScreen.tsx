import { Box, Button, Text } from "grommet";
import { useTranslation } from "react-i18next";
import { useHref } from "react-router-dom";

function LessonCloseScreen(props: LessonCloseScreenProps) {
  const { t } = useTranslation();
  const href = useHref("/");
  return (
    <Box>
      <Box>
        <Text size="90px" weight="bold" color="green">
          {t("rightExercises", { right: props.right })}
        </Text>
        <Text size="90px" weight="bold" color="red">
          {t("wrongExercises", { wrong: props.wrong })}
        </Text>
      </Box>
      <Button
        label={t("Start again")}
        onClick={props.restartLesson}
        margin="small"
      ></Button>
      <Button
        label={t("Close")}
        href={href}
        margin="small"
      ></Button>
    </Box>
  );
}
interface LessonCloseScreenProps {
  right: number;
  wrong: number;
  restartLesson: () => void;
}

export default LessonCloseScreen;
