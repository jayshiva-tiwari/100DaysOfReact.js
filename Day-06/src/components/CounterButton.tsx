// import React from 'react'
import { useState } from 'react'

function CounterButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <div
            style={{
                width: '30vw',
                height: '40vw',
                backgroundColor: 'grey',
                border: '1px solid #0000',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            <p
                style={{
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                }}
            >Hey click the and see the magic <br /> {`count: ${count}`}</p>
            <button
                onClick={handleClick}
                style={{
                    padding: '10px 20px',
                    fontSize: '1.5rem',
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    // cursor: 'pointer',
                }}
            >Click Me</button>
        </div>

    )
}

export default CounterButton