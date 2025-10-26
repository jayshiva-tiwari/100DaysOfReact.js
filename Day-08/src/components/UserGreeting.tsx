import React, {useState} from 'react'

function UserGreeting() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handlClick(){
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <p>welcome to React Day-08</p>
      <button onClick={handlClick}></button>
    </div>
  )
}

export default UserGreeting