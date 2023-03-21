import React from "react";

function LocationSearch({ getEvents }) {
    return (
        <div>
            <form onSubmit={""}>
            <input onChange={""} type="text" placeholder="Downs, IL" ></input>
            <button onClick={(e) => { e.preventDefault(); getEvents() }}type="button">Search</button>
            </form>
        </div>
    )
}

export default LocationSearch; 