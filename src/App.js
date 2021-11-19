
import { render } from '@testing-library/react';
import './App.css';

function App(params) {

  return (
    <div className="App-Input">
      <form className="InputForm">
      
      <div>  
      <label>
        Inseam:
        <input type='text'></input>
      </label>
      </div>

      <div>
      <label>
        Height:
        <input type='text'></input>
      </label>
      </div>

      <div>
      <label>
        Torso Length:
        <input type='text'></input>
      </label>
      </div>

      <div>
      <label>
        Email:
        <input type='text'></input>
      </label>
      </div>

      <div>
      <input type='submit' value='Submit'/>
      <input type='button' id="Reset" value='Reset'/>
      </div>
      </form>
      

      <div className="Output">


      </div>
    </div>

  
  );
}


export default App ;
