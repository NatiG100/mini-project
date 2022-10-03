import {  forwardRef } from 'react';
import './select.css';

const Select = ({text="",fullWidth=true,width,children,props},ref) =>{
    return(
        <label htmlFor="select" className="select-label">
            {text}
            <select {...props} ref={ref} className="select" style={{width:fullWidth?"100%":width}} id="select">
                {children}
            </select>
        </label>
    );
}

export default forwardRef(Select);