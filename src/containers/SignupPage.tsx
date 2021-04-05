import React from 'react'
import {Title, BlackButtonLink, BodyText} from '../style/base'
import UserForm from './UserForm'

export default function SignupPage() {


   return (
        <div>
            <Title>Sign up</Title>
            <UserForm signup={true} />
            <BodyText>Already have an account?</BodyText>
            <BlackButtonLink to="/login">Login</BlackButtonLink>
        </div>
    )
}