import React, {useState} from 'react'
import {FormInput} from '../style/dashboard'
import {BlackButton} from '../style/base'
import {StandardForm, InputHolder} from '../style/user'


type UserFormProps = {
    signup?: boolean
}
export default function UserForm(props: UserFormProps) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setName(e.currentTarget.value)
    }

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setPassword(e.currentTarget.value)
    }

    const onConfirmPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value)
    }


    const onFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if(!props.signup) {
            console.log({
                name,
                password
            })
        } else {
            console.log({
                name,
                password,
                confirmPassword
            })
        }
        
    }

    const confirmPasswordInput = () => {
        if(props.signup) {
            return (
                <InputHolder>
                    <FormInput name="confirmPassword" type="password" placeholder="confirm password" value={confirmPassword} onChange={onConfirmPasswordChange} />
                </InputHolder>
            )
        }
    }

    return (
        <StandardForm onSubmit={onFormSubmit}>
            <InputHolder>
                <FormInput name="name" placeholder="name" value={name} onChange={onNameChange} />
            </InputHolder>
            <InputHolder>
                <FormInput name="password" type="password" placeholder="password" value={password} onChange={onPasswordChange} />
            </InputHolder>
            {confirmPasswordInput()}
            <InputHolder>
                <BlackButton type="submit">Submit</BlackButton>
            </InputHolder>
            
        </StandardForm>
    )
}