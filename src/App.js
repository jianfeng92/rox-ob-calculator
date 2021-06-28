import React from "react";
import "./App.css";
import Tabs from "./tab";
import TabPane from "./tab-pane";
import OBCalculator from '../src/Pages/OBCalculator.js';
import EXPTracker from "./Pages/EXPTracker";

export default function App() {
  return (
    <div className="App">
      <div className="header">Ragnarok X Calculator Tools</div>
      <div className="container">
        <Tabs>
          <TabPane name="OB EXP Calculator" key="1">
            <OBCalculator />
          </TabPane>
          <TabPane name="EXP / MIN Tracker" key="2">
            <EXPTracker />
          </TabPane>
        </Tabs>
      </div>
      <footer>
      </footer>
    </div>
  );
}





