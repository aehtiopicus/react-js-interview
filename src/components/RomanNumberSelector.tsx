import { FC } from "react";
import { romanNumberMap } from "../utils/roman-number.utils";

interface RomanNumberSelectorProps {
  onNumberSelected: (romanNumber: string) => void;
}

const RomanNumberSelector: FC<RomanNumberSelectorProps> = ({
  onNumberSelected
}) => {
  return (
    <section>
      <h2 className="title">
        Roman Numbers
      </h2>
      <div className="roman-button-container">
        {Object.keys(romanNumberMap).map((rNum) => (
          <div key={rNum}>
            <button className="roman-button"
              onClick={() => onNumberSelected(rNum)}
            >
              {rNum}
            </button>
          </div>

        ))}
      </div>
    </section>
  )
};

export default RomanNumberSelector;