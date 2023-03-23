import React, {useState, useEffect} from "react";
import GenreDropdown from "./GenreDropdown";

function CategoryDropdown(props) {
    // console.log(props.eventsList)
    const segmentArray = props.eventsList.map((option) => option.classifications[0].segment.name);
    const uniqueSegments = [...new Set(segmentArray)]
    

    const captureCategory = (event) => {
        console.log('run');
        event.preventDefault()
        const newValue = event.target.value;
        console.log(newValue)
        handleFilter(newValue);
      }

    const handleFilter = (category) => {
        console.log("categoryfilter")
        if(!category) return;
  
        console.log(category)
        const CategoryEvents = props.eventsList.filter(x =>x.classifications[0].segment.name === category);
            props.reducer({ type: 'eventList', payload: CategoryEvents })
        };

    return (
      <div>
        <form>
        <select onChange={(e) => captureCategory(e)}>
        <option selected value=''>Select Category</option>
          {uniqueSegments.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        </form>
        <GenreDropdown eventsList={props.eventsList} reducer={props.reducer}/>
      </div>
    );
  
  
}

export default CategoryDropdown; 