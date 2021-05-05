import React, { useState } from 'react'
import axios from 'axios'
import General from './general'
import Volunteers from './volunteers'
import Hackers from './hackers'
import validator from 'validator'

const Application = () => {
  // general info --init
  const init = {
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    age: '',
    applicationType: '',
    resume: ''
  }
  // Volunteer info --init2
  const init2 = {
    company: '',
    reason: ''
  }
  // Hacker info --init3
  const init3 = {
    gradyear: '',
    university: '',
    reason: ''
  }
  const [volunteerObj, setVolunteerObj] = useState(init2)
  const [hackerObj, setHackerObj] = useState(init3)
  const [appObj, setApp] = useState(init)
  const [step, setStep] = useState(1)

  const handleChange = (event) => {
    const name = event.target.getAttribute('name')
    console.log(`name: ${name}, value: ${event.target.value}`)
    const newObj = { ...appObj, [name]: event.target.value }
    console.log(newObj[name])
    console.log(newObj)
    setApp(newObj)
  }
  const handleHackerChange = (event) => {
    const name = event.target.getAttribute('name')
    console.log(`name: ${name}, value: ${event.target.value}`)
    const newObj = { ...hackerObj, [name]: event.target.value }
    console.log(newObj[name])
    console.log(newObj)
    setHackerObj(newObj)
  }

  const handleVolunteerChange = (event) => {
    const name = event.target.getAttribute('name')
    console.log(`name: ${name}, value: ${event.target.value}`)
    const newObj = { ...volunteerObj, [name]: event.target.value }
    console.log(newObj[name])
    console.log(newObj)
    setVolunteerObj(newObj)
  }

  const handleSubmit = (event) => {
    // TODO:
    // validate form inputs before submit
    // onSubmit NO empty fields
    // onSubmit Name+gender validation
    event.preventDefault()
    if (validateInfo()) {
      if (appObj.applicationType === 'Hacker') {
        if (parseInt(hackerObj.gradyear, 10) < 2100 && parseInt(hackerObj.gradyear, 10) > 1900) {
          axios
            .post('https://us-central1-alperdec-backend.cloudfunctions.net/applicant', { ...appObj, ...hackerObj })
            .then(response => {
              console.log(response)
              setApp(init)
              setHackerObj(init2)
            })
        } else {
          alert('enter a valid year (1900-2100')
        }
      } else {
        axios
          .post('https://us-central1-alperdec-backend.cloudfunctions.net/applicant', { ...appObj, ...volunteerObj })
          .then(response => {
            console.log(response)
            setApp(init)
            setVolunteerObj(init3)
          })
      }
    }
  }
  const validateInfo = () => {
    if (appObj.applicationType === '') {
      alert('please select an application type before continuing')
      return false
    } else if (Object.values((({ firstName, lastname, gender, email, age }) => ({ firstName, lastname, gender, email, age }))(appObj)).some(e => e === '')) {
      alert('please fill out the form before proceeding')
      return false
    } else if (parseInt(appObj.age, 10) > 200 || parseInt(appObj.age, 10) < 1) {
      alert('specify a valid age... (1-200)')
      return false
    } else if (!validator.isEmail(appObj.email)) {
      alert('please specify a valid email')
      return false
    }
    return true
  }
  const incrementStep = () => {
    console.log('appObj from increment: ', appObj)
    if (!validateInfo()) {
      setStep(1)
    } else {
      setStep(step + 1)
    }
  }
  const decrementStep = () => setStep(step - 1)
  console.log(step)
  console.log(appObj)
  console.log(volunteerObj)
  console.log(hackerObj)
  if (step === 1) {
    return (
      <div className="application-container">
        <h1 className="app-header">APPLICATION</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <General handleChange={handleChange} appObj={appObj} incrementStep={incrementStep} />
      </form>
      </div>
    )
  } else if (step === 2 && appObj.applicationType === 'Hacker') {
    return (
    <div className="application-container">
      <h1 className="app-header">APPLICATION</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <Hackers handleChange={handleHackerChange} appObj={appObj} decrementStep={decrementStep}/>
      </form>
    </div>
    )
  } else if (step === 2 && appObj.applicationType === 'Volunteer') {
    return (
      <div className="application-container">
        <h1 className="app-header">APPLICATION</h1>
       <form onSubmit={handleSubmit} className="form-container">
        <Volunteers handleChange={handleVolunteerChange} appObj={appObj} decrementStep={decrementStep} />
      </form>
      </div>
    )
  } else {
    console.log('hmm', appObj.applicationType)
    return (
          <div className="application-container">
            <h1 className="app-header">APPLICATION</h1>
              <p>Application completed!</p>
          </div>
    )
  }
}

export default Application
