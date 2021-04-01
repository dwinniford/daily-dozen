import React from 'react'
import {Title, BlackButtonLink} from '../style/base'

export default function SignupPage() {
    return (
        <div>
            <Title>Sign up</Title>
            <p>Already have an account?</p>
            <BlackButtonLink to="/login">Login</BlackButtonLink>
        </div>
    )
}