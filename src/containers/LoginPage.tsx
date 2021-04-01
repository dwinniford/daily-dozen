import React from 'react'
import {Title, BlackButtonLink, BodyText} from "../style/base"
import UserForm from './UserForm'

export default function LoginPage() {
    return (
        <div>
            <Title>Login</Title>
            <UserForm />
            <BodyText>Don't have an account?</BodyText>
            <BlackButtonLink to="/signup">Sign up</BlackButtonLink>
        </div>
    )
}