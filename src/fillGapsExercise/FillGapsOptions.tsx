import FillGapsOption from "./FillGapsOption";
function FillGapsOptions(options: FillGapsData) {
  const onClick = (option: string) => {
    options.optionSelected(option);
  };
  return (
    <span>
      {options.options.map((o) => (
        <FillGapsOption key={o} option={o} optionSelected={() => onClick(o)} />
      ))}
    </span>
  );
}

interface FillGapsData {
  options: string[];
  optionSelected: (option: string) => void;
}
export default FillGapsOptions;
