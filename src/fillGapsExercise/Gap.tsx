import { Button } from "grommet";

function Gap(props: GapData) {
  if (isString(props.option)) {
    return (
      <Button
        label={props.option}
        onClick={() => props.optionClicked(props.option as string)}
      ></Button>
    );
  } else {
    return <>____</>;
  }
}
function isString(s: string | undefined): s is string {
  return typeof s === "string";
}
interface GapData {
  option?: string;
  optionClicked: (option: string) => void;
}
export default Gap;
