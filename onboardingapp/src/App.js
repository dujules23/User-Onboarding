//Imported React
import React, { useState, useEffect } from 'react'



//yup import
import * as yup from 'yup'

//imporing form.js
import Form from './Form'


 //Schema - shape of the form
 const schema = yup.object().shape({

  name: yup.string().required('Name is Required'),
  email: yup.string().required('Email is Required'),
  password: yup.string().required('Password is Required').min(6, 'Needs to be six characters minimum'),
  terms: yup.boolean().oneOf([true], 'You Must Read the Terms of Service')
})

// console.log(schema)

function App() {
  
  //Slice of State for the form
  const [form, setForm] = useState({
    name: '',
    email: '',
    password:'',
    terms: false,
    })
  

  //Slice of state for errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password:'',
    terms: false,
    })


  //Slice of state for Button (disabled until all fields of the form have been completed)
  const [disabled, setDisabled] = useState(true)
  
  //Slice of state to render new users to the page

  const [users, setUsers] = useState([])


  //function that validates errors based on the schema
  const validate = (name, value) => {

    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }
 

  useEffect(() =>{
    schema.isValid(form).then(valid =>  setDisabled(!valid))
  }, [form])

  return (

    <div className="App">
      
      <h1>Onboarding</h1>
      <br/>
      <div style={{color: 'red'}}>
        <div>{errors.name}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.terms}</div>
      </div>
      <br/>
      <Form
        form={form}
        setForm={setForm}
        disabled={disabled}
        setErrors={validate}
        users={users}
        setUsers={setUsers}/>

      <div>
        <div>{form.newUser}</div>
      </div>  
    </div>
  );
}

export default App;
