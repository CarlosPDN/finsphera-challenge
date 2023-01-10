import React, {useState} from 'react';
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {

return (
    <div className="logColor">
        <div className='LogArea'>
            <Form>
                <h1>LOGO</h1>
                <Form.Label>Hola, por favor ingresa tus datos</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Usuario ó email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Iniciar Sesión
                </Button>
                <div className="lanes"/>
                <Form.Text className="text-muted">
                    ¿Aún no tienes cuenta con nosotros?
                </Form.Text>
                <Button className='uses' variant="info" type="submit">
                    Registrate aqui
                </Button>
            </Form>
        </div>
    </div>
    )
}
//323758