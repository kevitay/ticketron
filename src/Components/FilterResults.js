import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DateFilter from "./DateFilter";

function FilterResults(props) {
    return (
        <div>
            <CategoryDropdown eventsList={props.eventsList} reducer={props.reducer} />
            <DateFilter eventsList={props.eventsList} reducer={props.reducer} />
        </div>
    )
}

export default FilterResults; 