import React from 'react';
import Banner from './components/Banner/Banner';
import State from './components/State/State';
import TrendingApp from './components/TrendingApp/TrendingApp';
import AllApps from './pages/AllApps/AllApps';

const Home = () => {
  return (
    <div>
      <AllApps></AllApps>
      <Banner></Banner>
      <State></State>
      <TrendingApp></TrendingApp>
    </div>
  );
};

export default Home;