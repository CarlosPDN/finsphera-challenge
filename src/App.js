import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Registro from './Components/Registro/Registo'
import Login from './Components/Login/Login';

function App() {
  
// funcion para cambiar forms
const [vistaActual, setVistaActual] = useState('login');

const cForm = (Vista) =>{
    setVistaActual(Vista)
}

  return (    
    <div>
      <Header />
      {vistaActual === 'login' ? <Login onFormSwitch={cForm}/> : <Registro onFormSwitch={cForm}/> }
    </div> 
  );
}

export default App;
