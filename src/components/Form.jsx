import { useState } from "react";

export default function Form() {
    const [value, setValue] = useState({
        name: "",
        profession: "",
        email: "",
        phone: "",
     });
    //  Working on State Structure and form component
    //  https://legacy.reactjs.org/docs/forms.html
    // https://react.dev/learn/choosing-the-state-structure
    return (
        <>
        <form onSubmit={handleSubmit}>
         <label>Name
         <input
           type="text"
           value={value}
           onChange={e => setValue(e.target.value)}
        />
         </label>
         
        </form>
        
        
     );
     </>
}