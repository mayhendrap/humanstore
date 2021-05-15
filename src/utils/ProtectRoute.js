import React from 'react'
import { Redirect, Route } from 'react-router'

export const ProtectRoute = ({ component: Component, ...rest }) => {
    let isLogin = false
    if (localStorage.getItem('user')) {
        isLogin = JSON.parse(localStorage.getItem('user')).isLogin
    }
    return (
        <Route
            {...rest}
            render={props => {
                if (!isLogin) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to="/" />
                }
            }}
        />
    )
}
