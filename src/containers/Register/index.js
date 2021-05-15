import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import useStyles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserFirebase } from '../../config/redux/actions'

function Register() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { isLoading, emailExists, passwordWeak } = useSelector((state) => state)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const res = await registerUserFirebase({ email: email, password: password }, dispatch)
        if (res) {
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div className={classes.wrapperForm}>
            <form className={classes.form} onSubmit={handleRegister}>
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    className={classes.root}
                    value={email}
                    required
                    error={emailExists ? true : false}
                    helperText={emailExists ? "The email address is already in use" : ''}
                    onChange={(e) => {
                        dispatch({type: "CHANGE_EMAIL_EXISTS", payload: false})
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
                    helperText={passwordWeak ? "Password should be at least 6 characters" : ''}
                    onChange={(e) => {
                        dispatch({type: "CHANGE_PASSWORD_WEAK", payload: false})
                        setPassword(e.target.value)
                    }}
                />
                <Button className={classes.button} type="submit" disabled={isLoading ? true: false}>{isLoading ? '...' : 'daftar'}</Button>
            </form>
        </div>
    )
}

export default Register
