// import React from 'react'


function App() {
  const time = new Date().getHours();
  const greeting = time < 12 ? 'Good Morning' : time < 18 ? 'Good Afternoon' : 'Good Night';
  return (
    <div>
      <p>welcome to React Day-02</p>
      <h4>{greeting} jay bhai</h4>
    </div>
  )
}

export default App;
