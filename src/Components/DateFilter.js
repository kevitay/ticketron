import React, { useEffect } from "react";
import { useState } from "react";

function DateFilter({eventsList, reducer}) {
    let currentDate = new Date().toISOString().slice(0, 10);
    let endOfYear = new Date(new Date().getFullYear(), 11, 31).toISOString().slice(0, 10);
    let maxDateVal = new Date('2050-12-31').toISOString().slice(0, 10);

    const [minDate, setMinDate] = useState(currentDate);
    const [maxDate, setMaxDate] = useState(endOfYear);

    const handleMinChange = (event) => {
        setMinDate(event.target.value);
    };

    const handleMaxChange = (event) => {
        setMaxDate(event.target.value);
    };

    const applyFilters = () => {
        let filteredResults = eventsList.filter(event => event.dates.start.localDate >= minDate && event.dates.start.localDate <= maxDate);
        reducer({ type: 'eventList', payload: filteredResults })
    }

    return (
        <div>
            <label for="start">Start date:</label>

            <input type="date" id="start" name="event-start"
                value={minDate}
                min={currentDate} max={maxDateVal}
                onChange={handleMinChange}>
            </input>
            <label for="end">End date:</label>

            <input type="date" id="end" name="event-start"
                value={maxDate}
                min={currentDate} max={maxDateVal}
                onChange={handleMaxChange}>
            </input>
            <button type="button" onClick={applyFilters}>Apply Filter</button>
        </div>
    )
}

export default DateFilter; 