import React, { useState, useReducer, useEffect } from "react";

const initialSearchState = {
    city: "",
    stateCode: "",
    countryCode: "US"
}

function reducer(state, action) {
    switch (action.type) {
      case "inputState":
        return {...state, stateCode: action.payload}
      case "inputCity":
        return { ...state, city: action.payload }
      default: return state;
    }
}

function LocationSearch({location}) {

    const [state, dispatch] = useReducer(reducer, initialSearchState); 
    const [formStatus, setFormStatus] = useState(false);

    useEffect(() => {
      location(state); 
      setFormStatus(false)
      console.log('triggered')
    }, [formStatus]);

    return (
      <div>
        <form onSubmit={(e) => { e.preventDefault(); setFormStatus(true)}}>
          <input onChange={(e) => dispatch({ type: 'inputCity', payload: e.target.value })} type="text" placeholder="Enter City Name"></input>
          <select onChange={(e) => dispatch({ type: 'inputState', payload: e.target.value })} name="state" required>
            <option selected value=''>Select state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
    );
}

export default LocationSearch; 
