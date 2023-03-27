
import React, { useState } from "react";

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

    const filteredOptions = options.filter((option) =>
        selectedOptions.includes(option) &&
        option.toLowerCase().startsWith(filterText.toLowerCase())
    );

    return (
        <div className="food-page">
            <h1>Lest See What You Have👀</h1>
            <div className="food-form">

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
                {/* <input type="text" value={inputValues.join(", ")} readOnly /> */}
            </div>
        </div>
    );

};
