import { Field } from "formik";
import { forwardRef } from "react"
import "./Input.css";

const Input = ({text,id,type,placeholder,fullWidth=true,width, ...otherProps})=>{
    return(
        <Field {...otherProps}>
            {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
                <label htmlFor={otherProps.id} className="input-label">
                    {text}
                    <input
                        {...field}
                        id={id}
                        type={type}
                        placeholder="placeholder"
                        className={`input ${touched&&errors[field.name]&&"input-error"}`}
                        style={{
                            width:fullWidth?"100%":width,
                        }}
                    />
                    {touched&&errors&&<p style={{color:"#ee3333",fontSize:"0.8em",margin:"2px"}}>{errors[field.name]}</p>}
                </label>
             )}
        </Field>
    );
}

export default Input;