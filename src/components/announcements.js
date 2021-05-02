import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Announcements = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios
      .get('https://cruzhacks22-organizer-endpoint.herokuapp.com/api/announcements')
      .then(response => {
        setMessages(response.data.results)
      })
  }, [])
  console.log(messages)
  return (
    <div className="announcement-container">
      <h1 className="announcement-header">ANNOUNCEMENTS</h1>
      <div className='announcements'>
      {messages.map((m, index) => {
        if (m.isLink) {
          return (
          <>
            <h5>{m.dateTime} <button onClick={() => window.open(m.link)} className="announcement-button">Click Here!</button></h5>
            <h3>{m.description}</h3>
          </>
          )
        } else {
          return (
            <>
            <h5>{m.dateTime}</h5>
            <h3>{m.description}</h3>
            </>
          )
        }
      })
    }
    </div>
    </div>
  )
}

export default Announcements
