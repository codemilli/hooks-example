import React from 'react';
import App, {Container} from 'next/app';

if (typeof window === 'object') {
  require('intersection-observer');
}

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <Component {...pageProps}/>
      </Container>
    );
  }
}

export default MyApp;
