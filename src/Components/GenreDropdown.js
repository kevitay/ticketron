import React, {useState, useEffect} from "react";

function GenreDropdown(props) {
    // console.log(props.eventsList)
//-----taking in the initial State as props.eventsList-- this will filter out any results that do not have a genre and map the results in to a new Array --//        
    const genreArray = props.eventsList.filter((option) => option.classifications[0].genre !== 'Undefined').map((option) => option.classifications[0].genre.name);
//----- "genreArray" contains duplicated so we use ...new Set to get rid of any duplication in the Array ---//     
    const uniqueGenres = [...new Set(genreArray)]

//-----when a Genre selection from the Drop down is selected,"on Change" runs CaptureGenre and passes the current selected Dropdown value to "handlefilter" ---// 
    const captureGenre = (event) => {
        console.log('run');
        event.preventDefault()
        const newValue = event.target.value;
        // console.log(newValue)
        handleFilter(newValue)
      }
//-----HandleFilter takes in a string and filters out any events without the specific genre value matching the category passed from captureGenre---// 
    const handleFilter = (genre) => {
        console.log("you got here")
        console.log(genre)
        
        const genres = props.eventsList.filter(x =>x.classifications[0].genre.name === genre);
            props.reducer({ type: 'eventList', payload: genres })
        };
//---The map function Dynamically populates the Dropdown with Categories from uniqueGenres ----// 
    return (
      <div>
        <form>
        <select onChange={(e) => captureGenre(e)}>
        <option selected value=''>Select Genre</option>
          {uniqueGenres.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        </form>
      </div>
    );
  
  
}

export default GenreDropdown; 