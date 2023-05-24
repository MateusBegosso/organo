import { useState } from 'react';
import Button from '../Button';
import DropDown from '../DropDown';
import TextField from '../TextField';
import './Form.css';

const Form = (props) => {


    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSubmitted = (event) => {
        event.preventDefault();
        props.onRegisteringNewEmployee({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmitted}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    onAlteration={value => setName(value)}
                />
                <TextField
                    required={true} 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    onAlteration={value => setRole(value)}
                />
                <TextField 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onAlteration={value => setImage(value)}
                />
                <DropDown 
                    required={true} 
                    label='Time' items={props.teams}
                    value={team}
                    onAlteration={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;