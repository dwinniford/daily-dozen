import React from 'react'
import {NavGrid, BlackButtonLink} from '../style/base.js'
import {connect} from 'react-redux'

type PropsType = {
    loggedIn: boolean
}

function NavBar(props: PropsType) {
    const userToken = () => {
        return localStorage.getItem('token')
      }

    return (
        <NavGrid>
            <BlackButtonLink to="/">Home</BlackButtonLink>
            <BlackButtonLink to="/about">About</BlackButtonLink>
            { userToken()? <BlackButtonLink to="/dashboard">Dashboard</BlackButtonLink> : null }
            { userToken()? null : <BlackButtonLink to="/login" >Login</BlackButtonLink> }
        </NavGrid>
    )
}

type StateType = {
    user: {loggedIn: boolean}
}

const mapStateToProps = (state: StateType) => {
    return {
        loggedIn: state.user.loggedIn
    }
}

export default connect(mapStateToProps)(NavBar)