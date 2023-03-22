import React from "react";

function CategoryDropdown(props) {
    console.log(props.eventsList)
    // [0].classifications[0].segment.name
    const segmentArray = props.eventsList.map((option) => option.classifications[0].segment.name);
    const uniqueSegments = [...new Set(segmentArray)]
    // {props.eventsList.map((option) => option.classifications[0].segment.name)}

    return (
      <div>
        <select>
          {uniqueSegments.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  
  
}

export default CategoryDropdown; 