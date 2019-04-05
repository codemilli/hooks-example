import React from 'react';

export class Intersection extends React.Component {
  state = {
    isVisible: false,
    visibleArea: 0,
    direction: null,
  };
  ref = React.createRef();

  componentDidMount() {
    this.observer = new IntersectionObserver(([entry]) => {
      const {isIntersecting, intersectionRatio} = entry;
      this.setState({
        isVisible: isIntersecting,
        visibleArea: intersectionRatio,
      });
    }, {
      threshold: .25,
    });
    this.observer.observe(this.ref.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const {style = {}, children} = this.props;
    return (
      <div style={{...style}} ref={this.ref}>
        {children(this.state)}
      </div>
    );
  }
}
