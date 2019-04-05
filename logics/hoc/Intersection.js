import React from 'react';

export class Intersection extends React.Component {
  state = {
    isVisible: false,
    direction: null,
  };
  io = null;
  ref = React.createRef();

  componentDidMount() {
    const observer = new IntersectionObserver(() => {

    }, {
      threshold: .25,
    });
    observer.observe(this.ref.current);
    console.log('ref : ', this.ref);
  }

  render() {
    const {style = {}, children} = this.props;
    return (
      <div style={{...style}} ref={this.ref}>
        {children}
      </div>
    );
  }
}
