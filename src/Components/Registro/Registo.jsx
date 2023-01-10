import React, {useState} from 'react';
import "./Registro.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registro() {

return (
    <div className="logColor">
        <div className='LogArea'>
            <Form className="d-grid gap-2">
                <h1>LOGO</h1>
                <Form.Group>
                    <Form.Label>Hola, por favor ingresa tus datos</Form.Label>
                    <Form.Control type="email" className="mb-4" placeholder="Usuario ó email" />
                    <Form.Control type="password" className="mb-3" placeholder="Contraseña" />
                    <Form.Control type="password" className="mb-3" placeholder="Confirmar contraseña" />
                    <Form.Check type="checkbox" label="Check me out" />
                    <Button variant="info" type="submit">
                        Registrar
                    </Button>
                </Form.Group>
                <div className="lanes"/>
                <Form.Group>
                    <Form.Text className="text-muted mb-2">
                        ¿Ya tienes cuenta con nosotros?   
                    </Form.Text>
                    <Button variant="success" type="submit">
                        Iniciar sesión
                    </Button>
                </Form.Group>
            </Form>
        </div>
    </div>
    )
}