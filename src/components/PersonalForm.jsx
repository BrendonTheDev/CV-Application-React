// eslint-disable-next-line no-unused-vars
import { useState } from "react";

function PersonalInfoForm() {
  const [value, setValue] = useState({
    name: "",
    profession: "",
    email: "",
    phone: ""
  });
   
  const handleChange = (e) => {
    const {name, value} = e.target
   setValue((prev) => {
      return {...prev, [name]: value}
   })
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(value);
 }

    return (
        <form onSubmit={handleSubmit} className="personal-info-form">
            <h2>Personal Information</h2>
         <label>Name</label>
         <input
           type="text"
           name="name"
           required
           onChange={handleChange} 
        />
        <label>Profession</label>
         <input
           type="text"
           name="profession"
           required
           onChange={handleChange} 
        />
        <label>Email</label>
         <input
           type="text"
           name="email"
           required
           onChange={handleChange} 
        />
        <label>Phone</label>
         <input
           type="text"
           name="phone"
           required
           onChange={handleChange} 
        />
        <button type="submit">Submit</button>
        </form>
    );
}
  
export default PersonalInfoForm
     