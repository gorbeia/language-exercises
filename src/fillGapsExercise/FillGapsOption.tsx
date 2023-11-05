import { Button } from "grommet";
function FillGapsOption(options: FillGapsData) {
  const onClick = (event: { stopPropagation: () => void; }) => {
    options.optionSelected(options.option);
    event.stopPropagation();
  };
  return (
    <>
      <Button label={options.option} margin={"small"} onClick={onClick} />
    </>
  );
}

interface FillGapsData {
  option: string;
  optionSelected: (option: string) => void;
}
export default FillGapsOption;
