import React from "react";
import "./App.css";
import Card from "./Components/Profile/Card";

function App() {
  return (
    <div className="App">
      <Card
        FullName={"Remilekun Wahab"}
        Address={"Lekki Gardens Phase 2"}
        About={
          "Hello, I'm Remilekun, I'm an aspiring full-stack developer but currently work at Bytestacks Technologies as a Product designer. I love designing visually captivating designs that are enjoyable and easy to use. You can read more about me via linkedin.com/in/wahab-remilekun-141b1b125"
        }
      />
    </div>
  );
}

export default App;
