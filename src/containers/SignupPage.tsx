import React from 'react'
import {Title, BlackButtonLink, BodyText} from '../style/base'

export default function SignupPage() {
    return (
        <div>
            <Title>Sign up</Title>
            <BodyText>Already have an account?</BodyText>
            <BlackButtonLink to="/login">Login</BlackButtonLink>
        </div>
    )
}