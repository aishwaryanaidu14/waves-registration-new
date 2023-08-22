import './App.css';
import "./RegWindow.js"
import RegWindow from './RegWindow.js';
import Team from './Team';

function App() {
  return (
    <div className="App">
      <h1 className="reg-heading">Registration</h1>
      <div style={{display:'flex', justifyContent: 'center',background:'#2B2B2B',}}>
      <RegWindow />
      <div className='line'></div>
      <Team />
      </div>
    </div>
  );
}

export default App;
