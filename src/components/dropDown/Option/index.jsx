import "./option.css";

const Option = ({...props})=>{
    return(
        <option {...props} className="option"/>
    );
}
export default Option;