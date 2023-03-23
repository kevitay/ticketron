import React, {useState, useEffect} from "react";

function GenreDropdown(props) {
    // console.log(props.eventsList)
    const segmentArray = props.eventsList.filter((option) => option.classifications[0].genre === 'Undefined').map((option) => option.classifications[0].genre.name);
    const uniqueSegments = [...new Set(segmentArray)]


    const captureGenre = (event) => {
        console.log('run');
        event.preventDefault()
        const newValue = event.target.value;
        // console.log(newValue)
        handleFilter(newValue)
      }

    const handleFilter = (genre) => {
        console.log("you got here")
        console.log(genre)
        
        const genres = props.eventsList.filter(x =>x.classifications[0].genre.name === genre);
            props.reducer({ type: 'eventList', payload: genres })
        };

    return (
      <div>
        <form>
        <select onChange={(e) => captureGenre(e)}>
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