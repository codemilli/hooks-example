import React, {Component} from 'react';
import {Intersection} from "../logics/hoc/Intersection"

class AwesomeCardHoc extends Component {
  ref = React.createRef();
  render() {
    return (
      <Intersection wrapRef={this.ref}>
        {(intersection) => {
          const {isVisible} = intersection;
          return (
            <div ref={this.ref} className={`AwesomeCard ${isVisible ? 'visible': ''}`}>
              <div className="Picture">
                This may be a Pic
              </div>
              <div className="Description">
                Hello, This is very awesome picture and description.
                Thank you.
              </div>
              <style jsx>{`
              .AwesomeCard {
                display: flex;
                flex-direction: column;
                width: 340px;
                height: 420px;
                margin-bottom: 40px;
                opacity: 0;
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 6px;
                box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
                transition: opacity .3s ease-in;
              }
              .AwesomeCard.visible {
                opacity: 1;
              }
              .Picture {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 80%;
                font-size: 32px;
              }
              .Description {
                padding: 8px 12px;
                border-top: 1px solid rgba(0, 0, 0, 0.05);
              }
            `}</style>
            </div>
          );
        }}
      </Intersection>
    );
  }
}

export default AwesomeCardHoc;
