import React, {useState} from "react";

function CategoryDropdown(props) {
    // console.log(props.eventsList)
    const [filter, setFilter] = useState({Category: ''});
    const segmentArray = props.eventsList.map((option) => option.classifications[0].segment.name);
    const uniqueSegments = [...new Set(segmentArray)]

    const captureCategory = (event) => {
        event.preventDefault();
        const newValue = event.target.value;
        console.log(newValue)
        setFilter({Category: newValue});
      }

    const handleFilter = (e) => {
        console.log("you got here")
        console.log(filter)
        e.preventDefault()
        const CategoryEvents = props.eventsList.filter(x =>x.classifications[0].segment.name === filter.Category);
            props.reducer({ type: 'eventList', payload: CategoryEvents })
        };

    return (
      <div>
        <form onSubmit={(e) => { handleFilter(e)}}>
        <select>
          {uniqueSegments.map((option) => (
            <option onClick={((e) => captureCategory(e))} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit" >Search</button>
        </form>
      </div>
    );
  
  
}

export default CategoryDropdown; 