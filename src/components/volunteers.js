import React from 'react'

const Volunteers = ({ handleChange, appObj, decrementStep }) => {
  return (
      <div className="volunteer-container">
        <h3 className="volunteer-title">Volunteers</h3>
        <div className="company">
          <label>
            <p>Company/Organization</p>
            <input name="company" onChange={handleChange} value={appObj.company} maxLength="50"/>
          </label>
        </div>
        <div className="reason">
          <label>
            <p>Why do you want to volunteer? (500 chars)</p>
            <input name="reason" onChange={handleChange} value={appObj.reason} maxLength="500" className="reason-input"/>
          </label>
        </div>
        <button onClick={decrementStep} className="prev-button">prev</button>
        <button type="submit" className="submit">submit</button>
      </div>
  )
}

export default Volunteers
