import React from 'react'
import "./style.css"
function Button({children, onClick, className}) {
    return (
        <div>
            <button className={`button ${className}`} onClick={onClick} >
                {children}
            </button>
            
        </div>
    )
}

export default Button
