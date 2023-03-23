import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DateFilter from "./DateFilter";

function FilterResults(props) {
    return (

        <div className="event-filters">
            <DateFilter eventsList={props.eventsList} reducer={props.reducer} />
            <CategoryDropdown eventsList={props.eventsList} reducer={props.reducer} />
        </div>
    )
}

export default FilterResults; 