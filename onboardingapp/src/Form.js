//React import
import React from 'react'



export default function Form (props) {

    

    const { form, setForm, setErrors, disabled } = props

    // console.log (values)

    //function that allows inputs to be changed
    const change = e => {

        //target
        const { checked, type, name, value } = e.target
        
        // //indicates unique checkbox feature that says 'if the type is a checkbox, checked populate, otherwise it will go back to the original state (false)'
        const valueToUse = type === 'checkbox' ? checked : value
        
        setForm({...form, [name]: valueToUse})
        
        //
        setErrors(name,valueToUse)
        
    }
   

    // const submit = e => {


    // }


    return(

        <form className="form-container">
            <label>Name:
                <input
                    name='name'
                    type="text"
                    placeholder='Enter Name'
                    maxLength='30'
                    value={form.name}
                    onChange={change}
                />
            </label>
            <br/>
            <label>Email:
                <input
                    name="email"
                    type="text"
                    placeholder='Enter Email'
                    maxLength='30'
                    value={form.email}
                    onChange={change}
                />
            </label>
            <br/>
            <label>Password:
                <input
                    name="password"
                    type="text"
                    placeholder='Enter Password'
                    maxLength='10'
                    value={form.password}
                    onChange={change}
                />
            </label>
            <br/>
            <label>Terms of Service:
                <input                                                     
                    name="terms"
                    type="checkbox"
                    checked={form.terms}
                    onChange={change}
                />
            </label>
            <br/>
            <button disabled={disabled} >Submit</button>
        </form>
    )
    
}