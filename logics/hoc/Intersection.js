import React from 'react';

export class Intersection extends React.Component {
  state = {
    isVisible: false,
    visibleArea: 0,
  };

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
    this.observer.observe(this.props.wrapRef.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const {children} = this.props;
    return children(this.state);
  }
}
