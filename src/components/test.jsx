import React, {useState} from 'react'

export const Test = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    // Function to toggle overlay visibility
    const toggleOverlay = () => {
      setShowOverlay(true);
    };

  return (
    <div>


<button onClick={toggleOverlay}>Surf as a Guest</button>

{/* 



{showOverlay && (
        <div className="popup-overlay" id="popupOverlay">
          <div className="popup-form">
            <h3>Enter Guest Details</h3>
            <form id="guestForm">
              <div className="form-group">
                <label htmlFor="guestNameInput">Name</label>
                <input type="text" className="form-control" id="guestNameInput" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="guestImageInput">Profile Picture</label>
                <input type="file" className="form-control" id="guestImageInput" accept="image/*" required />
              </div>
              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
      )}  */}
    </div>
  )
}
