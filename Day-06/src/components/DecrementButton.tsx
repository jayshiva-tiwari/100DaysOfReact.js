import React from 'react'
import { useState } from 'react'
function DecrementButton() {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count - 1);
    }
    return (
            <button 
            onClick={handleClick}
            style={{
                padding: '10px 20px',
                fontSize: '1.5rem',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            >Click Me minus</button>
    )
}

export default DecrementButton