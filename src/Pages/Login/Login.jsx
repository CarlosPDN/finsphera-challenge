import React, {useState} from 'react';
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const handleSubmit = (value)=>{
    value.preventDefault();
    console.log('email: ', email, 'password: ', password)
}

return (
    <div className="logColor">
        <div className='LogArea col'>
            <Form onSubmit={handleSubmit}>
                <h1>LOGO</h1>
                    <Form.Group className='d-grid gap-3 w-75 m-auto'>
                    <Form.Label>Hola, por favor ingresa tus datos</Form.Label>
                    <Form.Control onChange={(v)=>{setEmail(v.target.value)}} type="text" placeholder="Usuario ó email" />
                    <Form.Control onChange={(v)=>{setPassword(v.target.value)}} type="password" placeholder="Contraseña" />
                    <Button variant="success" type="submit">
                        Iniciar Sesión
                    </Button>
                </Form.Group>
            </Form>
            
            <div className="lanes mx-auto mt-4 mb-2"/>
            <div>
                <label className="text-muted">
                            ¿Ya tienes cuenta con nosotros?   
                </label>
                <Button href='http://localhost:3000/register' className='w-75 mt-2' variant="info">
                    Registrate aqui
                </Button>
            </div>
        </div>
    </div>
    )
}
//323758