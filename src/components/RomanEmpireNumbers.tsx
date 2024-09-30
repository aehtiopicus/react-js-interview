import { useState } from "react";
import { romanToInt } from "../utils/roman-conversion.utils";
import RomanNumberSelector from "./RomanNumberSelector";
import SumRNum from "./SumRNum";
import ResultTableContainer from "./ResultTableContainer";

const RomanEmpireNumbers = () => {
  const [list, setList] = useState<{ num: number; rNum: string }[]>([
    { num: 2, rNum: "II" },
  ]);
  const [sumRNum, setSumRNum] = useState("");
  const handleAddRomanNum = (rNum: string) => {
    setSumRNum(sumRNum + rNum);
  };

  const onDelete = (rNum: string) => () => {
    setList(list.filter((e) => e.rNum !== rNum));
  };

  const onSave = () => {
    if (romanToInt(sumRNum) !== 0) {
      setList([...list, { num: romanToInt(sumRNum), rNum: sumRNum }]);
    }else{
      alert('numero no valido')
    }
    setSumRNum("");
  };

  return (
    <div
      style={{
        width: "700px",
        margin: "auto",
      }}
    >
      <RomanNumberSelector onNumberSelected={handleAddRomanNum} />
      {sumRNum.length > 0 ? (
        <div>
          <SumRNum rNum={sumRNum} />
          <button onClick={onSave}>Guardar</button>
        </div>
      ) : (
        <h1>Seleccione números romanos</h1>
      )}
      <section>
        <h2 className="title">Current stored numbers</h2>
        <div className="result-table-container">
          <div className="result-table-header">Roman</div>
          <div className="result-table-header">Integer</div>
          <div className="result-table-header">Action</div>
        </div>
        {list.map((e) => {
          return (
            <ResultTableContainer
              num={e.num}
              rNum={e.rNum}
              onDelete={onDelete(e.rNum)}
            />
          );
        })}
      </section>
    </div>
  );
};

export default RomanEmpireNumbers;
