import React from 'react'
import {FormInput} from '../style/dashboard'
import {BlackButton} from '../style/base'

export default function UserForm() {
    return (
        <form>
            <FormInput name="name" placeholder="name" />
            <FormInput name="password" type="password" placeholder="password" />
            <BlackButton>Submit</BlackButton>
        </form>
    )
}