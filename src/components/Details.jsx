import React from 'react'

export const Details = () => {
    //add to buttons 
    // one for google map location 
    // one for contact number
  return (
    <div>
        <h3>Venue Details</h3>
        <p>Address: Pedagantyda , Visakhaptnam - 530044</p>
        <p>Phone: 9490964423</p>
        <button onClick={() => window.open('https://maps.app.goo.gl/i6WEyRAUC6rJ3Y479')}>Get Directions</button>
        <button onClick={() => window.open('tel:7075099932')}>Contact </button>
    </div>
  )
}
