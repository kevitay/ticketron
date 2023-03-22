import React from "react";

function CategoryDropdown(props) {
    console.log(props.eventsList.map((option) => option.classifications[0].segment.name))
    // [0].classifications[0].segment.name
    const segmentArray = props.eventsList.map((option) => option.classifications[0].segment.name);
    // {props.eventsList.map((option) => option.classifications[0].segment.name)}

    return (
      <div>
        <select>
          {segmentArray.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  
  
}

export default CategoryDropdown; 