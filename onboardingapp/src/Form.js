//React import
import React from 'react'

export default function Form (props) {
    return(
        
        <form className="form-container">
            <label>Name:
                <input
                    name='name'
                    type="text"
                />
            </label>
            <br/>
            <label>Email:
                <input
                    name="email"
                    type="text"
                />
            </label>
            <br/>
            <label>Password:
                <input
                    name="password"
                    type="text"
                />
            </label>
            <br/>
            <label>Terms of Service:
                <input
                    name="terms"
                    type="checkbox"
                />
            </label>
            <br/>
            <button>Submit</button>
        </form>
    )
    
}