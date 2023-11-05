import { useTranslation } from "react-i18next";

function ExerciseResult(props: ExerciseResultData) {
  const { t } = useTranslation();
  const getComponent = () => {
    switch (props.status) {
      case "valid":
        return (<>{t("Correct")}</>);
        break;
      case "invalid":
        return (<>{t("Incorrect")}</>);
        break;

      default:
        return "";
        break;
    }
  };
  return <h3>{getComponent()}</h3>;
}
interface ExerciseResultData {
  status: "empty" | "valid" | "invalid";
}

export default ExerciseResult;
