import './TextField.css';

const TextField = (props) => {

    const onTyped = (event) => {
        props.onAlteration(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyped} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;