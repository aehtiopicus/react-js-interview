import RomanNumberSelector from "./RomanNumberSelector";

const RomanEmpireNumbers = () => {

  const handleAddRomanNum = (rNum: string) => {
    console.log(rNum)
  }

  return <div style={{
    width: '700px',
    margin: 'auto'
  }}>
    <RomanNumberSelector onNumberSelected={handleAddRomanNum} />
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
      <div className="result-table-container">
        <div className="result-table-row">
          XX
        </div>
        <div className="result-table-row" >
          20
        </div>
        <div className="result-table-row" >
          <button
            style={{
              width: '90%',
              height: '40px'
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  </div>
};

export default RomanEmpireNumbers;