import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <div>
            <Link to="/" className="nav">
                Home
            </Link>
            <Link to="/m1" className="nav">
                Member One
            </Link>
            <Link to="/m2" className="nav">
                Member Two
            </Link>

        </div>
    )
}

export default Navigation;