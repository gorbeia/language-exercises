import Gap from "./Gap";

function Phrase(props: PhraseProps) {
  return (
    <p>
      {props.segments.map((segment) => {
        if (typeof segment == "string") {
          return (
            <span style={{lineHeight: "55px"}}>{segment}</span>
          );
        } else {
          return (
            <Gap
              key={segment.answer}
              option={props.selectedOptions[0]}
              optionClicked={props.optionClicked}
            ></Gap>
          );
        }
      })}
    </p>
  );
}

export interface PhraseProps {
  segments: Array<string | GapData>;
  selectedOptions: string[];
  optionClicked: (option: string) => void;
}
export interface GapData {
  answer: string;
}

export default Phrase;
