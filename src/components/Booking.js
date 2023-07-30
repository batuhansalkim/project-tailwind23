import React from 'react'

function Booking() {
  return (
    <div id='deals'>
        <form>
            <div>
                <label>Description</label>
                <select name="" id="">
                    <option>Grande Antigua</option>
                    <option>Key West</option>
                    <option>Maldives</option>
                    <option>Cozumel</option>
                </select>
            </div>
            <div>
                <div>
                    <label>Check-In</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Check-Out</label>
                    <input type="date" />
                </div>
            </div>
            <div>
                <label>Search</label>
                <button>Rates & Availibilties</button>
            </div>
        </form>
    </div>
  )
}

export default Booking