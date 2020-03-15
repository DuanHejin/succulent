import React from 'react';
import './App.css';
import HomeView from './views/home/HomeView';
import NavView from './views/nav/NavView';
import './components/componentStyles';
import './views/viewStyles';

function App() {
  return (
    <div className="app">
      <NavView></NavView>
      <HomeView></HomeView>
    </div>
  );
}

export default App;
