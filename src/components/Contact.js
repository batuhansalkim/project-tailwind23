import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h2>Send Us a message</h2>
      <p>We're standing ny!</p>
      <div>
        <img src="https://images.pexels.com/photos/17636977/pexels-photo-17636977/free-photo-of-skyscrapers-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <form>
          <div>
            <input type="text" placeholder='First'/>
            <input type="text" placeholder='Last'/>
            <input type="email" placeholder='Email'/>
            <input type="tel"  placeholder='Phone'/>
            <input type="text" placeholder='Address'/>
            <textarea cols="30" rows="10"></textarea>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;