import "./FormWithPrinter.scss";
import { useState } from "react";

export default function FormWithPrinter(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        textArea: "",
        isFriendly: false,
        employment: "",
        favColor: ""
    });

    const [shouldShowLogger, setShouldShowLogger] = useState(false);

    
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
        setShouldShowLogger(true);
    }

    return (
        <div>
            <form className="form" onSubmit={handleOnSubmit}>
                <input
                    className="form__input"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    className="form__input"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input 
                    className="form__input"
                    type="email" 
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea
                    className="form__textarea"
                    placeholder="Text Area"
                    onChange={handleChange}
                    name="textArea"
                    value={formData.textArea}
                />

                <div className="form__checkboxContainer">
                    <input
                        className="form__input"
                        onChange={handleChange}
                        id="checkbox" 
                        type="checkbox"
                        name="isFriendly"
                        value={formData.isFriendly}
                    />
                    <label htmlFor="#checkbox">Are you friendly?</label>
                </div>

                <fieldset className="form__radioFieldset">
                    <legend>Current employment status</legend>
                    <input
                        className="form__input"
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
                        className="form__input"
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
                        className="form__input" 
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

                <div className="form__selectContainer">
                    <label htmlFor="favColor">What is your favorite color?</label>
                    <br />
                    <select
                        className="form__select"
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
                </div>
                <button className="form__element">Submit</button>
            </form>
            <div className="printer">
                <h2>Submitted data</h2>
                {shouldShowLogger && (
                    <div>
                        <pre>
                            {JSON.stringify(formData, null, 2)}
                        </pre>
                    </div>
                )}
            </div>            
        </div>
    );
}