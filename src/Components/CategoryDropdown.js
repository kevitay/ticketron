import React, {useState, useEffect} from "react";
import GenreDropdown from "./GenreDropdown";

function CategoryDropdown(props) {
    // console.log(props.eventsList)
    const [filter, setFilter] = useState({Category: ''});
    const segmentArray = props.eventsList.map((option) => option.classifications[0].segment.name);
    const uniqueSegments = [...new Set(segmentArray)]
    
    useEffect(() => {
        handleFilter();
      }, [filter])

    const captureCategory = (event) => {
        console.log('run');
        const newValue = event.target.value;
        console.log(newValue)
        setFilter({Category: newValue});
      }

    const handleFilter = (e) => {
        console.log("you got here")
        console.log(filter)
        const CategoryEvents = props.eventsList.filter(x =>x.classifications[0].segment.name === filter.Category);
            props.reducer({ type: 'eventList', payload: CategoryEvents })
        };

    return (
      <div>
        <form onSubmit={(e) => {handleFilter(e)}}>
        <select onChange={captureCategory}>
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