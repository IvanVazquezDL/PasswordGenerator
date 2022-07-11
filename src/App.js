import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CheckBox from './Components/CheckBox';
import TextArea from './Components/TextArea';
import Select from './Components/Select';
import Button from './Components/Button';
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [configuration, setConfiguration] = useState({
    length: 8,
    uppercase: false,
    special: false,
    numeric: false
  });
  const numbers = Array.from({length: 121}, (_, i) => i + 8);

  function configurationHandler(value, property) {
    if(property in configuration) {
      setConfiguration((prevState) => ({...prevState, [property]: value}));
      console.log(configuration);
    }
  }

  function passwordHandler(generatedPassword) {
    setPassword(generatedPassword);
  }

  return (
  <div className="container">
    <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm pt-4">
        <h1 className='pb-2 center'>Password Generator</h1>
        <div className="col-sm-4 pt-4 pb-4">
          <Select elements={numbers} onSelect={configurationHandler}/>
          <CheckBox text="Include uppercase characters" onCheck={configurationHandler} id="uppercase"/>
          <CheckBox text="Include numeric characters" onCheck={configurationHandler} id="numeric"/>
          <CheckBox text="Include special characters" onCheck={configurationHandler} id="special"/>      
        </div>
        <div className='center pb-4'>
          <Button text='Generate Password' configuration={configuration} onGeneratedPassword={passwordHandler}/>
        </div>
        <TextArea text={password}/>
      </div>
      <div className="col-sm-2"></div>
    </div>
  </div>
  );
}

export default App;

