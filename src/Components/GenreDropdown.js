import React, {useState, useEffect} from "react";

function GenreDropdown(props) {
    // console.log(props.eventsList)
    const [filter, setFilter] = useState({genre: ''});
    const segmentArray = props.eventsList.map((option) => option.classifications[0].genre.name);
    const uniqueSegments = [...new Set(segmentArray)]

    useEffect(() => {
        handleFilter();
      }, [filter])

    const captureGenre = (event) => {
        console.log('run');
        const newValue = event.target.value;
        console.log(newValue)
        setFilter({genre: newValue});
      }

    const handleFilter = (e) => {
        console.log("you got here")
        console.log(filter)
        
        const genres = props.eventsList.filter(x =>x.classifications[0].genre.name === filter.genre);
            props.reducer({ type: 'eventList', payload: genres })
        };

    return (
      <div>
        <form onSubmit={(e) => {handleFilter(e)}}>
        <select onChange={captureGenre}>
        <option selected value=''>Select Genre</option>
          {uniqueSegments.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        </form>
      </div>
    );
  
  
}

export default GenreDropdown; 