
import './App.css'
import ToggleMessage from './components/TogglesMsg'
import UserGreeting from './components/UserGreeting'

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} userName="shiv" />
      <ToggleMessage />
    </>
  )
}

export default App
