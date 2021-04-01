import React from 'react'
import {FormInput} from '../style/dashboard'
import {BlackButton} from '../style/base'
import {StandardForm, InputHolder} from '../style/user'

export default function UserForm() {
    return (
        <StandardForm>
            <InputHolder>
                <FormInput name="name" placeholder="name" />
            </InputHolder>
            <InputHolder>
                <FormInput name="password" type="password" placeholder="password" />
            </InputHolder>
            <InputHolder>
                <BlackButton>Submit</BlackButton>
            </InputHolder>
            
        </StandardForm>
    )
}