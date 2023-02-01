import React, {useState} from 'react';
import "./Registro.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registro(props) {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [cPassword, setCPassword] = useState('');
const [status, setStatus] = useState('');
const [check, setCheck] = useState(false);

const paswregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/


const handleSubmit = (value)=>{
    value.preventDefault();

    //revision de el estado a otorgar al alertbox
    if(paswregex.test(password) === false){
        setStatus('falta')
        console.log('fallo', status)
        return status
    }else if(password !== cPassword){
        console.log('contraseñas desiguales')
        setStatus('desIgual')
        return status
    }else if(!check){
        setStatus('terms')
        console.log(check, "aceptar los terminos y condiciones")
        return status
    }else{
        setStatus('')
        return status
    }

}


return (
    <div className="logColor">
        <div className='LogArea col'>
            <Form onSubmit={handleSubmit}>
                <h1>LOGO</h1>
                <Form.Group className='w-75 m-auto'>
                    <Form.Label>Hola, por favor ingresa tus datos</Form.Label>
                    <Form.Control onChange={(v)=>{setEmail(v.target.value)}} type="text" className="mb-3 mt-3" placeholder="Usuario ó email" />

                    <Form.Group className='d-grid gap-3'>
                        <Form.Control onChange={(v)=>{setPassword(v.target.value)}} type="password" placeholder="Contraseña" />
                        <Form.Control onChange={(v)=>{setCPassword(v.target.value)}} type="password" placeholder="Confirmar contraseña" />
                        <Form.Group className="d-flex">
                            <Form.Check className="m-auto mt-1 bigCheckBox" type="checkbox"  onChange={()=>{setCheck(!check)}} />
                            <Form.Label className='terms'>Acepto y he leído los <a href="#">Términos y condiciones</a> y la <a href="#">Política de Privacidad</a></Form.Label>
                        </Form.Group>

            {/*de deshabilita el boton si los terms no fueron aceptados*/}
                        {!check 
                        ? <Button className='disabled' variant="info" type="submit">Registrar</Button> 
                        : <Button variant="info" type="submit">Registrar</Button>}

            {/*alert box aparece si uno de los terminos es encontrado, se añadio el alerta de terminos apesar de no ser visible*/}
                        {status === 'falta' ? <p className="alert alert-danger text-sm mb-0">la contraseña debe tener un mínimo de 8 caracteres incluyendo números, mayúsculas y minúsculas y caracteres especiales.</p>
                        : status === 'desIgual' ? <p className="alert alert-danger text-sm mb-0">Las contraseñas no coinciden.</p>
                        : status === 'terms' ? <p className="alert alert-danger text-sm mb-0">Acepta los terminos y condiciones</p>
                        : <div></div>}
                    </Form.Group>

                </Form.Group>
            </Form>

            <div className="lanes mx-auto my-2"/>
            <div>
                <label className="text-muted">
                    ¿Ya tienes cuenta con nosotros?   
                </label>
                <Button href='http://localhost:3000/login' className='w-75 mt-2' variant="success">
                    Iniciar sesión
                </Button>
            </div>
        </div>
    </div>
    )
}