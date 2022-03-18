import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Hl from "./components/hl"
import Sl from "./components/sl"
import BiologyHL from "./components/biologyhl"
import BiologySL from "./components/biologysl"
import ChemistryHL from "./components/chemistryhl"
import ChemistrySL from "./components/chemistrysl"
import MathAAHL from "./components/mathaahl"
import MathAASL from "./components/mathaasl"
import MathAAHLM from "./components/mathaahlm"
import MathAASLM from "./components/mathaaslm"

const routing = (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/physicshl" element={<Hl/>}/>
        <Route path="/physicssl" element={<Sl/>}/>

        <Route path="/mathaahl" element={<MathAAHL/>}/>
        <Route path="/mathaahl/m*" element={<MathAAHLM/>}/>
        <Route path="/mathaasl" element={<MathAASL/>}/>
        <Route path="/mathaasl/m*" element={<MathAASLM/>}/>

        <Route path="/biologyhl" element={<BiologyHL/>}/>
        <Route path="/biologysl" element={<BiologySL/>}/>

        <Route path="/chemistryhl" element={<ChemistryHL/>}/>
        <Route path="/chemistrysl" element={<ChemistrySL/>}/>
      </Routes>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
