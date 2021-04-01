import React, {useState} from 'react'
import {FormInput} from '../style/dashboard'
import {BlackButton} from '../style/base'
import {StandardForm, InputHolder} from '../style/user'



export default function UserForm() {
    const [name, updateName] = useState("")
    const [password, updatePassword] = useState("")

    type ChangeEventType = {
        target: {value: string}
    }
    const onNameChange = (e: ChangeEventType) => {
        console.log(e.target.value)
        updateName(e.target.value)
    }

    const onPasswordChange = (e: ChangeEventType) => {
        console.log(e.target.value)
        updatePassword(e.target.value)
    }

    return (
        <StandardForm>
            <InputHolder>
                <FormInput name="name" placeholder="name" value={name} onChange={(event: ChangeEventType) => onNameChange(event)} />
            </InputHolder>
            <InputHolder>
                <FormInput name="password" type="password" placeholder="password" value={password} onChange={(event: ChangeEventType) => onPasswordChange(event)} />
            </InputHolder>
            <InputHolder>
                <BlackButton>Submit</BlackButton>
            </InputHolder>
            
        </StandardForm>
    )
}