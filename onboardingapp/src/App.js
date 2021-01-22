//Imported React
import React, { useState, useEffect } from 'react'



//yup import for setting up schema
import * as yup from 'yup'

//imporing form.js
import Form from './Form'


///***Stretch Items***///
//import card

import {
  Card, CardText, CardBody, CardLink,
  CardTitle, Col, Row
} from 'reactstrap';

import  styled  from 'styled-components'


//styles

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #006370;
`;

const TWrapper =styled.section`
  color: #53ADAC
`


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
      <TWrapper>
        <Title>Onboarding</Title>
      </TWrapper>
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
        setUsers={setUsers}
        />
      <br/>
      <div>
        {
        users.map( user => {
          console.log(user)
          return  (
          <div>
            <Card body color="success">
              
              <Col sm="6">
                <CardBody>
                  <CardTitle tag="h2">Team Member</CardTitle>
                    <CardText>Name:{user.name}</CardText>
                    <CardText>Email:{user.email}</CardText>
                    <CardText>Password:{user.password ? "Correct" : "Not Submitted"}</CardText>
                    <CardText>TOS:{user.terms ? 'Terms have been read': 'not read'}</CardText>
                </CardBody>
              </Col>
              
            </Card>
            </div>
          
            )
        })
        }     
      </div>  
    </div>
  );
}

export default App;
