import "./Form.scss";
import { useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        textArea: "",
        isFriendly: false
    });
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        
        console.log(formData);
    }
    
    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="email" 
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="Text Area"
                onChange={handleChange}
                name="textArea"
                value={formData.textArea}
            />
            <input
                onChange={handleChange}
                id="checkbox" 
                type="checkbox"
                name="isFriendly"
                value={formData.isFriendly}
            />
            <label htmlFor="#checkbox">Are you friendly?</label>
        </form>
    )
}