import React from 'react';
import AwesomeCard from "../components/AwesomeCard"

const Hoc = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <div className="Contents">
        <AwesomeCard/>
      </div>
      <style>{`
        .Contents {
          flex:
        }
      `}</style>
    </div>
  );
}

export default Hoc;
