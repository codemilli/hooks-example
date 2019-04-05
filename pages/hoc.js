import React from 'react';
import AwesomeCardHoc from "../components/AwesomeCardHoc"

const Hoc = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <div className="Contents">
        <AwesomeCardHoc/>
        <AwesomeCardHoc/>
        <AwesomeCardHoc/>
        <AwesomeCardHoc/>
        <AwesomeCardHoc/>
        <AwesomeCardHoc/>
        <AwesomeCardHoc/>
        <AwesomeCardHoc/>
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

export default Hoc;
