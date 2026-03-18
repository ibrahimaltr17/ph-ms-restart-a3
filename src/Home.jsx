import React from 'react';
import Banner from './components/Banner/Banner';
import State from './components/State/State';
import TrendingApp from './components/TrendingApp/TrendingApp';
import AllApps from './pages/AllApps/AllApps';
import InstalledApps from './pages/InstalledApps/InstalledApps';
import AppDetails from './pages/AppDetails/AppDetails';
import PageNotFound from './pages/errors/PageNotFound';
import AppNotFound from './pages/errors/AppNotFound';

const Home = () => {
  return (
    <div>
      <AppNotFound></AppNotFound>
      <PageNotFound></PageNotFound>
      <AppDetails></AppDetails>
      <InstalledApps></InstalledApps>
      <AllApps></AllApps>
      <Banner></Banner>
      <State></State>
      <TrendingApp></TrendingApp>
    </div>
  );
};

export default Home;