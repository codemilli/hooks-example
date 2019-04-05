import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/hoc">
        <a>HOC</a>
      </Link>
      <Link href="/hooks">
        <a>Hooks</a>
      </Link>
    </div>
  );
}

export default Home;
