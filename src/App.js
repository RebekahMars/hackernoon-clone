/*Imports*/

import Programming from "./Programming";
import Technology from "./Technology";
import Crypto from "./Crypto";
import Javascript from "./Javascript";
import Python from "./Python";
import Blockchain from "./Blockchain";
import Gaming from "./Gaming";
import AI from "./Ai";
import Startup from "./Startup";
import React from "./React";
import Security from "./Security";
import Slogging from "./Slogging";
import Podcast from "./Podcast";
import Decentralization from "./Decentralization";
import Velo from "./Velo";
import Hackernoon from "./Hackernoon";
import Internet from "./Internet";
import Software from "./Development";

import "./Card.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="articles">
          <Programming/>
          <Technology/>
          <Crypto/>
          <Javascript/>
          <Python/>
          <Blockchain/>
          <Gaming/>
          <AI/>
          <Startup/>
          <React/>
          <Security/>
          <Slogging/>
          <Podcast/>
          <Decentralization/>
          <Velo/>
          <Hackernoon/>
          <Internet/>
          <Software/>
        </div>
      </header>
    </div>
  );
}

export default App;
