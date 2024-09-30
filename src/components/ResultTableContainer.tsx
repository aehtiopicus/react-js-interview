import React from "react";

interface ResultTableContainerProps {
    rNum: string;
    num: number;
    onDelete: (rNum:string) => void
}

const ResultTableContainer = ({rNum, num, onDelete}:ResultTableContainerProps) => {
  return (
    <div className="result-table-container">
      <div className="result-table-row">{rNum}</div>
      <div className="result-table-row">{num}</div>
      <div className="result-table-row">
        <button
          style={{
            width: "90%",
            height: "40px",
          }}
          onClick={()=>onDelete(rNum)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ResultTableContainer;
