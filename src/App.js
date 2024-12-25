import logo from './logo.svg'
import './App.css'
import Form from './Form/Form'
import Uncontrolled from './Form/Uncontrolled'
import Calculator from './LiftingState/Calculator'

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello world</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header> */}
      {/* <Form></Form> */}
      {/* <Uncontrolled></Uncontrolled> */}
      <Calculator></Calculator>
    </div>
  )
}

export default App
