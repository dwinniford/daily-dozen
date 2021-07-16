import React, {useState, useEffect} from 'react'
import {FormInput} from '../style/dashboard'
import {BlackButton, MessageHolder} from '../style/base'
import {StandardForm, InputHolder} from '../style/user'
import {connect} from 'react-redux'
import SIGN_UP from '../gql/mutations/signUp'
import SIGN_IN from '../gql/mutations/signIn'
import {useMutation} from '@apollo/client'
import {Redirect} from 'react-router-dom'


type UserFormProps = {
    signup?: boolean
    login: Function
}
function UserForm(props: UserFormProps) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [message, setMessage] = useState("")
    const [signUp, {data, loading, error, called}] = useMutation(SIGN_UP, {errorPolicy: 'all'})
    const [signIn, signInStatus] = useMutation(SIGN_IN, {errorPolicy: 'all'})


    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
        setName(e.currentTarget.value)
    }

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
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
            setMessage("")
            return true
        }
    }


    const onFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if(!props.signup) {
            if(validateForm()) {
                signIn({variables: {name: name, password: password}})
                console.log({
                    name,
                    password
                })
                // props.login(name)
                // window.location.assign('/dashboard')
            } else {
                console.log("invalid input")
            }
            
        } else {
            if(validateForm()) {
                signUp({variables: {name: name, password: password}})
                console.log({
                    name,
                    password,
                    confirmPassword
                })
                // props.login(name)
                // window.location.assign('/dashboard')
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
    const saveToken = (token: string) => {
        localStorage.setItem('token', token)
    }
    if(loading || signInStatus.loading) return <MessageHolder>loading</MessageHolder>
    if(error || signInStatus.error) {
        console.log(error, signInStatus.error)
        return <MessageHolder>There was an error logging in.  Please check your user name and password.</MessageHolder>
    }
    
    if(called || signInStatus.called) {
        if(signInStatus.called) {
            console.log(signInStatus.data)
            saveToken(signInStatus.data.signIn.token)
            props.login(signInStatus.data.signIn.user.name)
            return <Redirect to="/dashboard" />
        }
        console.log(data); 
        saveToken(data.signUp.token)
        props.login(data.signUp.user.name)
        return <Redirect to="/dashboard" />
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

const mapDispatchToProps = (dispatch: Function) => {
    return {
        login: (name: string) => dispatch({type: "LOGIN", name})
    }
}

export default connect(null, mapDispatchToProps)(UserForm)