import React, { useEffect } from "react";
import { useState } from "react";

function DateFilter({ eventsList }) {
    let currentDate = new Date().toISOString().slice(0, 10);

    const [minDate, setMinDate] = useState(currentDate);
    const [maxDate, setMaxDate] = useState(currentDate);
    const [testState, setTestState] = useState(eventsList);

    const handleMinChange = (event) => {
        setMinDate(event.target.value);
    };

    const handleMaxChange = (event) => {
        setMaxDate(event.target.value);
    };

    useEffect(() => {
        let results = testState
        results = results.filter(event => event.dates.start.localDate >= minDate && event.dates.start.localDate <= maxDate);
        console.log(results)
    },
        [minDate, maxDate]
    )

    return (
        <div>
            <label for="start">Start date:</label>

            <input type="date" id="start" name="event-start"
                value={minDate}
                min={currentDate} max="2050-12-31"
                onChange={handleMinChange}>
            </input>
            <br></br>
            <label for="end">End date:</label>

            <input type="date" id="end" name="event-start"
                value={maxDate}
                min={currentDate} max="2050-12-31"
                onChange={handleMaxChange}>
            </input>
        </div>
    )
}

export default DateFilter; 