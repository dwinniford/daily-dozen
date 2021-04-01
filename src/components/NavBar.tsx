import React from 'react'
import {NavGrid, BlackButtonLink} from '../style/base.js'

export default function NavBar() {
    return (
        <NavGrid>
            <BlackButtonLink to="/">Home</BlackButtonLink>
            <BlackButtonLink to="/about">About</BlackButtonLink>
            <BlackButtonLink to="/dashboard">Dashboard</BlackButtonLink>
            <BlackButtonLink to="/login" >Login</BlackButtonLink>
        </NavGrid>
    )
}
