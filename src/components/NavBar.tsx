import React from 'react'
import {NavGrid, BlackButtonLink} from '../style/base.js'
import {connect} from 'react-redux'

type PropsType = {
    loggedIn: boolean
}

function NavBar(props: PropsType) {
    return (
        <NavGrid>
            <BlackButtonLink to="/">Home</BlackButtonLink>
            <BlackButtonLink to="/about">About</BlackButtonLink>
            { props.loggedIn? <BlackButtonLink to="/dashboard">Dashboard</BlackButtonLink> : null }
            { props.loggedIn? null : <BlackButtonLink to="/login" >Login</BlackButtonLink> }
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