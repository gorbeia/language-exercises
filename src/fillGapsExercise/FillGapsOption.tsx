import { StyledFillGapsOption } from "./StyledFillGapsOption";

function FillGapsOption(options: FillGapsData) {
  const onClick = (event: { stopPropagation: () => void; }) => {
    options.optionSelected(options.option);
    event.stopPropagation();
  };
  return (
    <>
      <StyledFillGapsOption  onClick={onClick} >{options.option}</StyledFillGapsOption>
    </>
  );
}

interface FillGapsData {
  option: string;
  optionSelected: (option: string) => void;
}
export default FillGapsOption;
