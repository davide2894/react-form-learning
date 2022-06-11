import "./Form.scss";
import { useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        textArea: "",
        isFriendly: false,
        employment: "",
        favColor: ""
    });

    console.log(formData.favColor); 
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleOnSubmit(evt) {
        evt.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleOnSubmit}>
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
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">--- choose color ---</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <button>Submit</button>
        </form>
    )
}