import React from 'react';
import Banner from './components/Banner/Banner';
import State from './components/State/State';
import TrendingApp from './components/TrendingApp/TrendingApp';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <State data={data}></State>
      <TrendingApp data={data}></TrendingApp>
    </div>
  );
};

export default Home;