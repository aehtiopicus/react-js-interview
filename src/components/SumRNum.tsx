import React from "react";
interface SumRNum {
  rNum: string;
}
const SumRNum = ({ rNum }: SumRNum) => {
  return <div>{rNum}</div>;
};

export default SumRNum;
