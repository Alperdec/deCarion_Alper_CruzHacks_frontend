import React from 'react'

const General = ({ handleChange, appObj, incrementStep }) => {
  return (
      <div className="general-container">
        <div className="firstname">
            <label>
              <p>First Name</p>
              <input name="firstname" onChange={handleChange} value={appObj.firstname} maxLength="25"/>
            </label>
        </div>
        <div className="lastname">
            <label>
              <p>Last Name</p>
              <input name="lastname" onChange={handleChange} value={appObj.lastname} maxLength="25"/>
            </label>
        </div>
        <div className="gender">
            <label>
              <p>Gender</p>
              <input type="radio" id="gender1" name="gender" value="Female" onChange={handleChange}/>
              <label htmlFor="gender1">Female</label>
              <input type="radio" id="gender2" name="gender" value="Male" onChange={handleChange}/>
              <label htmlFor="gender2">Male</label>
              <input type="radio" id="gender3" name="gender" value="Trans" onChange={handleChange}/>
              <label htmlFor="gender3">Trans</label>
              <input type="radio" id="gender4" name="gender" value="Non-binary" onChange={handleChange}/>
              <label htmlFor="gender4">Non-binary</label>
              <input type="radio" id="gender5" name="gender" value="" onChange={handleChange}/>
              <label htmlFor="gender5">other</label>
              <input name="gender" onChange={handleChange} value={appObj.gender} maxLength="50"/>
            </label>
        </div>
        <div className="email">
          <label>
            <p>Email</p>
            <input name="email" onChange={handleChange} value={appObj.email} maxLength="50"/>
          </label>
        </div>
        <div className="age">
          <label>
            <p>Age</p>
            <input name="age" onChange={handleChange} value={appObj.age} maxLength="3"/>
          </label>
        </div>
        <div className="apptype">
          <label>
            <p>Are you applying as a Hacker or Volunteer</p>
            <input type="radio" id="apptype1" name="applicationType" value="Hacker" onChange={handleChange}/>
            <label htmlFor="apptype1">Hacker</label>
            <input type="radio" id="apptype2" name="applicationType" value="Volunteer" onChange={handleChange}/>
            <label htmlFor="apptype2">Volunteer</label>
            </label>
        </div>
          <div className="resume">
            <label>
              <label htmlFor="resume">Upload Your Resume</label>
              <input type="file" id="resume" name="resume" accept=".docx, .pdf" onChange={handleChange}/>
            </label>
          </div>
          <button onClick={incrementStep} className="next-button">next</button>
      </div>
  )
}

export default General
