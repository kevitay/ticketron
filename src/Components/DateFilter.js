import React from "react";

function DateFilter() {
    return (
        <div>
            <label for="start">Start date:</label>
            <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
            </input>
            <label for="start">End date:</label>
            <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
            </input>
        </div>
    )
}

export default DateFilter; 