
import './App.css'
import ToggleMessage from './components/togglesMsg'
import UserGreeting from './components/UserGreeting'

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={false} userName="shiv" />
      <ToggleMessage />
    </>
  )
}

export default App
