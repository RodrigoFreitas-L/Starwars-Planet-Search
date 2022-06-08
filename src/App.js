import React from 'react';
import './App.css';
import Planets from './components/Planets';
import PlanetsContextProvider from './context/PlanetsContextProvider';

function App() {
  return (
    <PlanetsContextProvider>
      <Planets />
    </PlanetsContextProvider>
  );
}

export default App;
