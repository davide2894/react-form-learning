import "./Form.scss";
import { useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: ""
    });
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value 
            }
        })
        console.log(formData);
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}