import FillGapsOption from "./FillGapsOption";
function FillGapsOptions(options: FillGapsData) {
  const onClick = (option: string) => {
    options.optionSelected(option);
  };
  return (
    <div style={{display: "flex"}}>
      {options.options.map((o) => (
        <div style={{padding: "10px"}}>
        <FillGapsOption key={o} option={o} optionSelected={() => onClick(o)} />
        </div>
      ))}
    </div>
  );
}

interface FillGapsData {
  options: string[];
  optionSelected: (option: string) => void;
}
export default FillGapsOptions;
 