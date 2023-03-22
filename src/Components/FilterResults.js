import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DateFilter from "./DateFilter";

function FilterResults(props) {
    return (
        <div>
            <DateFilter />
            <CategoryDropdown eventsList={props.eventsList} />
        </div>
    )
}

export default FilterResults; 