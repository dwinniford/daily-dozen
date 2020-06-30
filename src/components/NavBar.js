import React from 'react'
import {Link} from 'react-router-dom'
import {NavGrid, BlackButtonLink} from '../style/base.js'

export default function NavBar() {
    return (
        <NavGrid>
            <BlackButtonLink className="black-button" to="/">Home</BlackButtonLink>
            <BlackButtonLink className="black-button" to="/about">About</BlackButtonLink>
        </NavGrid>
    )
}
