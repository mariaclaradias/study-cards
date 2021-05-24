import Head from 'next/head';
import React from 'react';
import Dashboard from '../components/dashboard';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Study Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default Home;
