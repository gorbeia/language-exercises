import { Paragraph } from "grommet";
import Gap from "./Gap";

function Phrase(props: PhraseProps) {
  return (
    <Paragraph>
      {props.segments.map((segment) => {
        if (typeof segment == "string") {
          return segment;
        } else {
          return (
            <Gap
              option={props.selectedOptions[0]}
              optionClicked={props.optionClicked}
            ></Gap>
          );
        }
      })}
    </Paragraph>
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
