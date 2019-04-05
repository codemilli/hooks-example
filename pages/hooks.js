import React from 'react';
import AwesomeCardHooks from "../components/AwesomeCardHooks"

const Hooks = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <div className="Contents">
        <AwesomeCardHooks/>
        <AwesomeCardHooks/>
        <AwesomeCardHooks/>
        <AwesomeCardHooks/>
        <AwesomeCardHooks/>
        <AwesomeCardHooks/>
        <AwesomeCardHooks/>
      </div>
      <style>{`
        .Contents {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
}

export default Hooks;
