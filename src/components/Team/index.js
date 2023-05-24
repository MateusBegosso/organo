import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
    return (
        (props.employees.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee backgroundColor={props.primaryColor} name={employee.name} role={employee.role} image={employee.image} key={employee.name}/>)}
            </div>
        </section>
        : ''
    )
}

export default Team;