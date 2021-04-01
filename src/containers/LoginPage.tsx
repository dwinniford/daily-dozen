import React from 'react'
import {Title, BlackButtonLink} from "../style/base"
import UserForm from './UserForm'

export default function LoginPage() {
    return (
        <div>
            <Title>Login</Title>
            <UserForm />
            <p>Don't have an account?</p>
            <BlackButtonLink to="/signup">Sign up</BlackButtonLink>
        </div>
    )
}