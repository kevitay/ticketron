import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DateFilter from "./DateFilter";

function FilterResults() {
    return (
        <div>
            <DateFilter />
            <CategoryDropdown />
        </div>
    )
}

export default FilterResults; 