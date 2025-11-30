import '../styles/Card.css'
function Card(props) {
    console.log(props);
    
  return (
    <div className="card">
      <div className="imgDiv">
        <img src="https://i.pinimg.com/736x/48/ba/f7/48baf72eb07a924f085779453f9c9f62.jpg" alt="" />
      </div>
      <div className="cardTxt">
        <h1>{props.user}</h1>
        <p>{props.role}</p>
      </div>
    </div>
  )
}

export default Card