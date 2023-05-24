import './DropDown.css';

const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={event => props.onAlteration(event.target.value)} value={props.value}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown;