import React from "react";

const Form = () => {
    return(
        <div className="form">
            <div className="formText">
                <p>We all know that time is money... so stop wasting time, and save money wuth kab it!</p>
            </div>
            <div className="inputs">
                <div> 
                    <input placeholder='First Name' type="text" />
                    <input className='inputSec' placeholder='Last Name' type="text" />
                </div>
                <div>
                    <input placeholder='Mail' type="text" />
                    <input  className='inputSec' placeholder='Phone' type="text" />
                </div>
                <div className="message">
                <label>Message</label>
                <input placeholder='write your message' type="text" />
                <button>Send a message</button>
                </div>
            </div>
        </div>
    )
}

export default Form;