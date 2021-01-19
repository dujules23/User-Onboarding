//Imported React
import React, { useState } from 'react'

//Axios import
import axios from 'axios'

//yup import
import * as yup from 'yup'

//imporing form.js
import Form from './Form'




function App() {
  //Slice of State
  const [form, setForm] = useState({
    name: '',
    email: '',
    password:'',
    terms: false,
  })


  return (

    <div className="App">
      <h1>Onboarding</h1>
      <Form/>
    </div>
  );
}

export default App;
