import FillGapsOption from "./FillGapsOption";
function FillGapsOptions(options: FillGapsData) {
  const onClick = (option: string) => {
    options.optionSelected(option);
  };
  return (
    <>
      {options.options.map((o) => (
        <FillGapsOption option={o} optionSelected={() => onClick(o)} />
      ))}
    </>
  );
}

interface FillGapsData {
  options: string[];
  optionSelected: (option: string) => void;
}
export default FillGapsOptions;
