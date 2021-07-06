import React from 'react'
import {NavGrid, BlackButtonLink} from '../style/base.js'
import {connect} from 'react-redux'

type PropsType = {
    loggedIn: boolean,
    logout: Function
}

function NavBar(props: PropsType) {
    // const userToken = () => {
    //     return localStorage.getItem('token')
    //   }
    const deleteToken = () => {
        localStorage.removeItem('token')
        props.logout()
    }

    return (
        <NavGrid>
            <BlackButtonLink to="/">Home</BlackButtonLink>
            <BlackButtonLink to="/about">About</BlackButtonLink>
            { props.loggedIn? <BlackButtonLink to="/dashboard">Dashboard</BlackButtonLink> : null }
            { props.loggedIn? <BlackButtonLink to="/login" onClick={deleteToken}>Logout</BlackButtonLink> : <BlackButtonLink to="/login" >Login</BlackButtonLink> }
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

const mapDispatchToProps = (dispatch: Function) => {
    return {
        logout: () => dispatch({type: "LOGOUT"})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)