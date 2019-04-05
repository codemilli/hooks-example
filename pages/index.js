import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link href="/hoc">
          <a>HOC</a>
        </Link>
      </div>
      <div>
        <Link href="/hooks">
          <a>Hooks</a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
