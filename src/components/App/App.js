import React, { useState } from "react";
import { ReactDOM } from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css';

const name = require('@rstacruz/startup-name-generator');
// ihiuhih

const App = () => {

  const [headerText, setheaderText] = useState('Name It!');
  const [headerExpanded, setheaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
     setheaderExpanded(!inputText);
     setSuggestedNames(inputText ? name(inputText) :[]); 
    
  };

  return (
    <div>
      <Header headTitle={headerText} headerExpanded={headerExpanded} /> 
      <SearchBox onInputChange={handleInputChange}/>
      <ResultsContainer suggestedNames={suggestedNames}/>
    </div>
  );
}

export default App;  