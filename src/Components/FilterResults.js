import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DateFilter from "./DateFilter";

function FilterResults(props) {
    return (
//-------componants used to filter results by Date and category. The "CategoryDropdown contains the GenreDropDown component"
        <div className="event-filters">
            <DateFilter eventsList={props.eventsList} reducer={props.reducer} />
            <CategoryDropdown eventsList={props.eventsList} reducer={props.reducer} />
        </div>
    )
}

export default FilterResults; 