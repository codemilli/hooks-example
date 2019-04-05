import React from 'react';
import AwesomeCard from "../components/AwesomeCard"

const Hoc = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <div className="Contents">
        <AwesomeCard/>
        <AwesomeCard/>
        <AwesomeCard/>
        <AwesomeCard/>
      </div>
      <style>{`
        .Contents {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Hoc;
