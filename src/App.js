import { useState } from "react";
import './App.css';
import Header from "./components/Header";
import { ThemeButton, Globalbar } from "./context/GlobalState";
import CovidData from "./components/Covid_Data";

function App() {

  const islit = useState(true);
  const Global = useState('Global');

  return (
    <ThemeButton.Provider value={islit}>
      <Globalbar.Provider value={Global}>
      <div className={islit[0]?'':'dark'}>
        <div>
          <Header />
        </div>
        <div className="container">
          <CovidData />
        </div>
      </div>
      </Globalbar.Provider>
    </ThemeButton.Provider>
  );
}

export default App;
