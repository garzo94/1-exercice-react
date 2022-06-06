import logo from './logo.svg';
import './App.css';
import Padre from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';

import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import TaskListComponent from './components/container/Task-list';
import GreetingsStyles from './components/pure/GreetingsStyles';
import Clock from './hooks/lifecycle/lifeCicle';

import LifeCicleExcercise from './hooks/lifecycle/lifeCicleExcercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponentA/> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <Padre></Padre> */}
        {/* <Ejemplo4 nombre="Alex">
           <p>jeje</p>
        </Ejemplo4> */}
        {/* <TaskListComponent/> */}
        {/* <GreetingsStyles name="Ales"/> */}
        <LifeCicleExcercise/>

      </header>
    </div>
  );
}

export default App;
