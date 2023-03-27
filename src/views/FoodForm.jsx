
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Chicken",
    "Spagetti",
    "Tomatos",
    "Onion",
    "Meat"
];

export function FoodForm() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValues, setInputValues] = useState([]);
    const [filterText, setFilterText] = useState("");
  
    const handleOptionClick = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(
          selectedOptions.filter((selectedOption) => selectedOption !== option)
        );
        setInputValues(
          inputValues.filter((inputValue) => inputValue !== option)
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
        setInputValues([...inputValues, option]);
      }
    };
  
    const handleRemoveClick = (option) => {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option)
      );
      setInputValues(inputValues.filter((inputValue) => inputValue !== option));
    };
  
    const filteredOptions = options.filter(
      (option) =>
        !selectedOptions.includes(option) &&
        option.toLowerCase().startsWith(filterText.toLowerCase())
    );

    function generate() {
        console.log(selectedOptions)
    }
  
    return (
      <div className="food-page">
        <h1>Tell Me What You Have👀</h1>
        <input
          type="text"
          placeholder="Filter options"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <ul>
          {filterText && filteredOptions.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
              />
              {option}
            </li>
          ))}
        </ul>
        <div>
          {selectedOptions.map((option) => (
            <span key={option}>
              {option}{" "}
              <button onClick={() => handleRemoveClick(option)}>x</button>
            </span>
          ))}
        </div>
        <Link to="/menu">Start</Link>
        {/* <button onClick={generate}>Start</button> */}
      </div>
    );
  };


  