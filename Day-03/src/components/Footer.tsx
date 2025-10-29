import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ position: 'absolute' }} >
            <p>© {year} My App. All rights reserved.</p>
        </footer>
    )
}

export default Footer