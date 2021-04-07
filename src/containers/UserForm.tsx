import React, {useState, useEffect} from 'react'
import {FormInput} from '../style/dashboard'
import {BlackButton, MessageHolder} from '../style/base'
import {StandardForm, InputHolder} from '../style/user'


type UserFormProps = {
    signup?: boolean
}
export default function UserForm(props: UserFormProps) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [message, setMessage] = useState("")


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

    useEffect(() => {
        if(password !== confirmPassword) {
            setConfirmPasswordError(true)
        } else {
            setConfirmPasswordError(false)
        }
    }, [password, confirmPassword])

    const validateForm = () => {
        if(name.length < 2) {
            setMessage("Name must have at least 2 characters.")
            return false
        } else if(password.length < 5) {
            setMessage("Password must have at least 5 characters.")
            return false
        } else if(props.signup && password !== confirmPassword) {
            setMessage("Password does not match Confirm Password.")
            return false
        } else {
            return true
        }
    }


    const onFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if(!props.signup) {
            if(validateForm()) {
                console.log({
                    name,
                    password
                })
            } else {
                console.log("invalid input")
            }
            
        } else {
            if(validateForm()) {
                console.log({
                    name,
                    password,
                    confirmPassword
                })
            } else {
                console.log("invalid input")
            }
            
        }
        
    }

    const confirmPasswordInput = () => {
        if(props.signup) {
            return (
                <InputHolder>
                    <FormInput error={confirmPasswordError} name="confirmPassword" type="password" placeholder="confirm password" value={confirmPassword} onChange={onConfirmPasswordChange} />
                </InputHolder>
            )
        }
    }

    return (
        <StandardForm onSubmit={onFormSubmit}>
            {message.length? <MessageHolder>{message}</MessageHolder> : null}
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