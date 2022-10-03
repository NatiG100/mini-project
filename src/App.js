import './App.css';
import Input from 'components/Input/Input.jsx';
import Button from 'components/Button';
import Select from 'react-select';
import Option from 'components/dropDown/Option';
import { state } from 'data/us-states';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Fragment } from 'react';

function App() {

  //customizing react select
  const customStyles = {
    option:(provided,state)=>({
      ...provided,
      color:state.isFocused||state.isSelected?"white":"gray",
      backgroundColor:state.isFocused?"#48484c":"#18181c"
    }),
    control:(provided,state)=>({
      ...provided,
      padding:"4px",
      marginLeft:"5px",
      marginTOp:"4px",
      backgroundColor:"rgba(255,255,255,0.1)",
      color:"red",
      border:state.isFocused?"2px solid var(--light-color)":"2px solid rgba(0,0,0,0)",
      outline:0,
    })
  }

  //form schema
  const formSchema = Yup.object().shape({
    firstName:Yup.string()
      .required("First Name is required."),
    lastName:Yup.string()
      .required("Last Name is required."),
    birthDate:Yup.date()
      .required("Date of Birth is required."),
    state:Yup.string()
      .required("State is required.")
  })

  //initial values
  const initialValues = {
    firstName:"",
    lastName:"",
    birthDate:"",
    state:"",
  }
  return (
    <div style={{display:"flex",justifyContent:"center",width:"100%",top:"0px",paddingTop:"5%"}}>
      <div style={{
        maxWidth:"400px",
        backgroundColor:"rgb(71,57,48)",
        padding:"20px",
        borderRadius:"10px",
      }}>
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={(values)=>{
              console.log(values);
            }}
          >
            {
              (formik)=>{
                const { errors } = formik;
                console.log(errors);
                return(
                  <Form>
                    <div style={{
                      display: "grid",
                      gap:"15px",
                    }}>

                      <div style={{
                        display:"grid",
                        gridTemplateColumns:"1fr 1fr",
                        gap:"10px",
                      }}>
                        <Input
                          name="firstName"
                          id="firstName"
                          text = "First Name"
                          placeholder = "First Name"
                        />
                        <Input
                          name="lastName"
                          id="lastName"
                          text = "Last Name"
                          placeholder = "Last Name"
                        />
                      </div>
                      <Input
                        name="birthDate"
                        id="birthDate"
                        type="date"
                        text = "Date Of Birth"
                        placeholder = "Date Of Birth"
                      />
                      <Field name='state'>
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors, setFieldValue}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                          <div>
                            <Select
                              name={field.name}
                              id='state'
                              placeholder="State"
                              styles={customStyles}
                              options={state.map((stateName)=>({value:stateName,label:stateName}))}
                              onChange={(option)=>setFieldValue(field.name,option.value)}
                              onBlur={field.onBlur}
                              theme={(theme) => ({
                                ...theme,
                                colors: {
                                ...theme.colors,
                                  neutral0:"#18181c",
                                  neutral60:"white",
                                  neutral80:"white",
                                },
                              })}
                            />
                            {touched&&errors&&<p style={{color:"#ee3333",fontSize:"0.8em",margin:"2px"}}>{errors[field.name]}</p>}
                          </div>
                        )}
                      </Field>
                      <Button style={{justifySelf:"right",width:"max-content"}} type="submit">Done</Button>
                    </div>
                  </Form>
                )
              }
            }
          </Formik>
        </div>
    </div>
  );
}

export default App;
