import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import useStyles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUserFirebase } from '../../config/redux/actions'
import { useHistory } from 'react-router'

function Login() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const { isLoading, loginError } = useSelector((state) => state)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await LoginUserFirebase({ email: email, password: password }, dispatch)
        if (res) {
            setEmail('')
            setPassword('')
        }
        history.push("/")
    }
    return (
        <div className={classes.wrapperForm}>
            <form className={classes.form} onSubmit={handleLogin}>
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    className={classes.root}
                    value={email}
                    required
                    error={loginError ? true : false}
                    helperText={loginError ? "Email address or Password is wrong!!" : ''}
                    onChange={(e) => {
                        dispatch({type: "CHANGE_LOGIN_ERROR", payload: false})
                        setEmail(e.target.value)
                    }}
                />
                <TextField
                    type="password"
                    label="Password" 
                    variant="outlined" 
                    className={classes.root}
                    value={password}
                    required
                    error={loginError ? true : false}
                    helperText={loginError ? "Email address or Password is wrong!!" : ''}
                    onChange={(e) => {
                        dispatch({type: "CHANGE_LOGIN_ERROR", payload: false})
                        setPassword(e.target.value)
                    }}
                />
                <Button className={classes.button} type="submit" disabled={isLoading ? true: false}>{isLoading ? '...' : 'Masuk'}</Button>
            </form>
        </div>
    )
}

export default Login
