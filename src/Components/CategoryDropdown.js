import React, {useState, useEffect} from "react";
import GenreDropdown from "./GenreDropdown";

function CategoryDropdown(props) {
    // console.log(props.eventsList)
//-----taking in the initial State as props.eventsList-- this will filter out any results that do not have a segment and map the results in to a new Array --//    
    const segmentArray = props.eventsList.filter((option) => option.classifications[0].segment !== 'Undefined').map((option) => option.classifications[0].segment.name);
//----- "segmentArray" contains duplicated so we use ...new Set to get rid of any duplication in the Array ---//   
    const uniqueSegments = [...new Set(segmentArray)]
    
//-----when a selection from the Drop down is selected,"on Change" runs CaptureCategory and passes the current selected Dropdown value to "handlefilter" ---// 
    const captureCategory = (event) => {
        console.log(segmentArray)
        console.log('run');
        event.preventDefault()
        const newValue = event.target.value;
        console.log(newValue)
        handleFilter(newValue);
      }
//-----HandleFilter takes in a string and filters out any events without the specific category value matching the category passed from captureCategory---// 
    const handleFilter = (category) => {
        console.log("categoryfilter")
        if(!category) return;
  
        console.log(category)
        const CategoryEvents = props.eventsList.filter(x =>x.classifications[0].segment.name === category);
            props.reducer({ type: 'eventList', payload: CategoryEvents })
        };

//---The map function Dynamically populates the Dropdown with Categories from uniqueSegments ----// 
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