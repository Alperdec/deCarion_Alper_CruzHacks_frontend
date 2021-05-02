import React from 'react'
import Announcements from './components/announcements'
import Application from './components/application'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div className="title-container">
      <p>CruzHacks 2022</p>
      </div>
      <Announcements />
      <Application />
    </div>
  )
}

export default App
