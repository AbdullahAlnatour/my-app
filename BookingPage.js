import { useState } from "react";
function BookingPage(){
       const [value,setValue]=useState("");
       const [name,setName]=useState("");
       const [name2,setName2]=useState("");
       const [availableTimes,setAvailableTimes]=useState("");
       const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted");
        setName("");
        setValue("");
        setName2("");
       }
    return(
        <form style={{display:"grid" , gap:"20px"}} onSubmit={handlesubmit}>
            <p>BookingForm</p>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" value={name} onChange={e =>setName(e.target.value)} required/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " value={availableTimes} onChange={e =>setAvailableTimes(e.target.value)} required>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="2" min="1" max="10" id="guests" value={value} onChange={e =>setValue(e.target.value)} required/>
   <label htmlFor="occasion" >Occasion</label>
   <select id="occasion" value={name2} onChange={e =>setName2(e.target.value)} required>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select><confirmedBooking>
   <button disabled={!value} type="submit" value={value} onChange={e =>setValue(e.target.value)}>
            Submit
          </button></confirmedBooking>
          <br></br></form>
    );
}

export default BookingPage;
