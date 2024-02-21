import React from 'react'
import "./Career.css"

function Career() {
  return (
    <>
    <div class="container-fluid" id="background">
   <div className="join">
    <img src="career/join us.png" width="130px" alt="join"/>
   </div>
   <div class="container mt-3">

  <form action="/action_page.php" className="form">
  
    <div class="mb-3 mt-3">
    <label for="fname" className="label">First Name</label>
      <input type="text" className="input" placeholder="Enter First Name" name="fname"/>
    </div>
    <div class="mb-3">
    <label for="lanme" className="label">Last Name</label>
      <input type="text" className="input"   placeholder="Enter Last Name" name="lname"/>
    </div>
    <div class="mb-3">  
    <label for="email"  className="label">Enter Email</label>
      <input type="email" className="input"   placeholder="Enter Email" name="email"/>
    </div>
    <div class="mb-3">
    <label for="dob"  className="label">Enter date of birth</label>
     <input type="date" className="input"  placeholder="Enter date of birth" name="dob"/>
    </div>
    <div class="mb-3">
    <label for="city"  className="label">Enter City</label>
      <input type="text" className="input"   placeholder="Enter City" name="city"/>
    </div>
    <div class="mb-3">
    <label for="state"  className="label">Enter State</label>
      <input type="state" className="input"   placeholder="Enter State" name="state"/>
    </div>
    <div class="mb-3">
    <label for="phno"  className="label">Enter Phone Number</label>
      <input type="number"className="input" placeholder="Enter Phone Number" name="phno"/>
    </div>
   
      
      <button class="button-60" type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span class="text"><b>Submit</b></span>
      </button>
    </form>
    </div>

   </div>
    
    </>
  )
}

export default Career