import React from "react";

export const Details = () => {
  //add to buttons
  // one for google map location
  // one for contact number
  return (
    <div>
      <div className="addressBox">
        <h3>Venue Details:</h3>
        <p>Address: PIWA Community Hall, Pedagantyda , Gajuwaka, Visakhaptnam - 530044</p>
        <p>Phone: 9490964423</p>
        <div className="buttonBox">
          <button
            onClick={() =>
              window.open("https://maps.app.goo.gl/i6WEyRAUC6rJ3Y479")
            }
            className="addressBtn"
          >
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/arcade/64/marker.png"
              alt="marker"
            />
            Get Directions
          </button>
        </div>
        <div className="buttonBox">
          <button
            className="contactBtn"
            onClick={() => window.open("tel:9490964423")}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/arcade/64/phone.png"
              alt="phone"
            />
            Contact{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
