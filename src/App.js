// import logo from './logo.svg';
import './App.css';
import Padre from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';

import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import TaskListComponent from './components/container/Task-list';
import GreetingsStyles from './components/pure/GreetingsStyles';
import Clock from './hooks/lifecycle/lifeCicle';

import LifeCicleExcercise from './hooks/lifecycle/lifeCicleExcercise';
import Father from './components/container/Father';
import ComponentePadre from './Sesiones789/ComponentePadre';
import OptionalRender from './components/pure/OptionalRender';
import Cuadrado from './Sesiones10-12/Ejercicio12RenderizadoCondicional';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';
import FormikTask from './Sesiones131415/FormikTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ComponentA/> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <Padre></Padre> */}
        {/* <Ejemplo4 nombre="Alex">
           <p>jeje</p>
        </Ejemplo4> */}
        <TaskListComponent/>
        {/* <GreetingsStyles name="Ales"/> */}
        {/* <LifeCicleExcercise/> */}
        {/* <Father></Father> */}
        {/* <ComponentePadre/> */}
        {/* <OptionalRender></OptionalRender> */}
        {/* <Cuadrado></Cuadrado> */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* <FormikTask></FormikTask> */}

      </header>
    </div>
  );
}

export default App;
