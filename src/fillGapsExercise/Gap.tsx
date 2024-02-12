import { StyledFillGapsOption } from "./StyledFillGapsOption";

function Gap(props: GapData) {
  if (isString(props.option)) {
    return (
      <StyledFillGapsOption
        onClick={() => props.optionClicked(props.option as string)}
      >{props.option}</StyledFillGapsOption>
    );
  } else {
    return <>________</>;
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
