import React, {useState} from 'react'
import {FormInput} from '../style/dashboard'
import {BlackButton} from '../style/base'
import {StandardForm, InputHolder} from '../style/user'



export default function UserForm() {
    const [name, updateName] = useState("")
    const [password, updatePassword] = useState("")

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        updateName(e.currentTarget.value)
    }

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        updatePassword(e.currentTarget.value)
    }


    const onFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        console.log({
            name,
            password
        })
    }

    return (
        <StandardForm onSubmit={onFormSubmit}>
            <InputHolder>
                <FormInput name="name" placeholder="name" value={name} onChange={onNameChange} />
            </InputHolder>
            <InputHolder>
                <FormInput name="password" type="password" placeholder="password" value={password} onChange={onPasswordChange} />
            </InputHolder>
            <InputHolder>
                <BlackButton type="submit">Submit</BlackButton>
            </InputHolder>
            
        </StandardForm>
    )
}