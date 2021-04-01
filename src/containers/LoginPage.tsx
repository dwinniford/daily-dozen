import React from 'react'
import {Title, BlackButtonLink} from "../style/base"

export default function LoginPage() {
    return (
        <div>
            <Title>Login</Title>
            <p>Don't have an account?</p>
            <BlackButtonLink to="/signup">Sign up</BlackButtonLink>
        </div>
    )
}