import React from 'react'

const Hackers = ({ handleChange, appObj, decrementStep }) => {
  return (
      <div className="volunteer-container">
        <h3 className="volunteer-title">Hackers</h3>
        <div className="company">
        <label>
          <p>Graduation Year</p>
          <input name="gradyear" onChange={handleChange} value={appObj.gradyear} maxLength="4"/>
        </label>
        <p>UCSC student?</p>
        <label htmlFor="school">Yes </label>
        <input type="radio" id="school" name="university" value="University of California, Santa Cruz" onChange={handleChange}/>
        <label htmlFor="school2">No </label>
        <input type="radio" id="school2" name="university" value="" onChange={handleChange}/>
        <input name="university" onChange={handleChange} value={appObj.university} maxLength="50"/>
        </div>
        <div className="reason">
          <label>
            <p>Why do you want to participate? (500 chars)</p>
            <input name="reason" onChange={handleChange} value={appObj.reason} maxLength="500" className="reason-input"/>
          </label>
        </div>
        <button onClick={decrementStep} className="prev-button">prev</button>
        <button type="submit" className="submit">submit</button>
      </div>
  )
}

export default Hackers
