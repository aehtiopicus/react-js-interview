import { useCallback, useEffect, useState } from "react";
import { getNumbers, postNumber, removeNumber } from "../api/number.service";
import { romanToInt } from "../utils/roman-conversion.utils";
import { isRomanNumberValid } from "../utils/roman-nums-validation.utils";
import RomanNumberSelector from "./RomanNumberSelector";

const RomanEmpireNumbers = () => {

  const [currentRomanNumber, setCurrentRomanNumber] = useState<string>('');

  const [numbers, setNumbers] = useState<{
    intNum: number;
    romNum: string;
  }[]>([]);

  useEffect(() => {
    (async() => {
      setNumbers(await getNumbers())
    })();
  }, [])


  const handleAddRomanNum = (rNum: string) => {
    const possibleNumber = currentRomanNumber + rNum;
    if (isRomanNumberValid(possibleNumber)) {
      setCurrentRomanNumber(currentRomanNumber + rNum);
    } else {
      alert(`${possibleNumber} is not a valid Roman Number`)
    }
  }
  
  const handleAddNumber = () => {
    const numberNum = romanToInt(currentRomanNumber);
    postNumber(numberNum, currentRomanNumber);
    setNumbers((state) => [...state, {intNum: numberNum, romNum: currentRomanNumber }])
    setCurrentRomanNumber('');
  }

  const handleRemoveNumber = useCallback(async(numberToRemove: number) => {
    await removeNumber(numberToRemove);
    setNumbers(await getNumbers())
  }, []);

  return <div style={{
    width: '700px',
    margin: 'auto'
  }}>
    <RomanNumberSelector onNumberSelected={handleAddRomanNum} />
    <section>
      <h2 className="title">
        Current  Number
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 4px', height: '120px', columnGap: '8px'}}>
        <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', padding: '12px'}}>
          <p style={{ fontSize: '16px', fontWeight: '900', background: '#ccc'}}>{currentRomanNumber}</p>
        </div>
        <div style={{ display: 'flex', rowGap: '4px', flexDirection: 'column'}}>
          <button style={{ height: 'fit-content' }} onClick={() => setCurrentRomanNumber('')}>Clear</button>
          <button style={{ height: 'fit-content' }} disabled={!currentRomanNumber} onClick={handleAddNumber}>Submit</button>
        </div>
      </div>
    </section>
    <section>
      <h2 className="title">
        Current stored numbers
      </h2>
      <div className="result-table-container" >
        <div className="result-table-header">
          Roman
        </div>
        <div className="result-table-header">
          Integer
        </div>
        <div className="result-table-header">
          Action
        </div>
      </div>
      {numbers.map(({intNum, romNum}) => (
      <div className="result-table-container">
        <div className="result-table-row">
          {romNum}
        </div>
        <div className="result-table-row" >
          {intNum}
        </div>
        <div className="result-table-row" >
          <button
            onClick={() => handleRemoveNumber(intNum)}
            style={{
              width: '90%',
              height: '40px'
            }}
          >
            Delete
          </button>
        </div>
      </div>
      ))}
    </section>
  </div>
};

export default RomanEmpireNumbers;