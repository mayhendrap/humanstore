import React, { useState } from 'react'
import useStyles from './style'

import { AppBar, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { AccountCircleOutlined, ShoppingBasketOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { isLogin, productsQty } = useSelector((state) => state)
    let user = []

    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'))
    }

    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    
    const handleLogout = () => {
        setAnchorEl(null)
        localStorage.removeItem("user")
        dispatch({type: "CHANGE_ISLOGIN", payload: false})
    }
    
    return (
        <>
            <AppBar elevation={0} position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Container className={classes.wrapperHeader}>
                        <Link to="/" className={classes.storeName}>
                            <Typography variant="h6">
                                Humanstore
                            </Typography>
                        </Link>
                        <div className={classes.rightHeader}>
                            {
                                isLogin || user.isLogin ?
                                <>
                                    <Link to="/cart" className={classes.cartWrapper}>
                                        <IconButton className={classes.cartLogo}>
                                            <ShoppingBasketOutlined />
                                        </IconButton>
                                        <Typography variant="caption" className={classes.countCart}>{productsQty}</Typography>
                                    </Link>
                                    <Divider orientation="vertical" flexItem />
                                    <div className={classes.accountWrapper}>
                                        <Typography variant="caption" className={classes.accountName}>
                                            {user.email}
                                        </Typography>
                                        <IconButton
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                        >
                                            <AccountCircleOutlined className={classes.accountIcon}/>
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            className={classes.menuDropdown}
                                            elevation={1}
                                        >
                                            <MenuItem onClick={handleLogout}>
                                                Keluar
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to={`/login`} className={classes.auth}>
                                        <Button variant="outlined" size="small">
                                            Masuk
                                        </Button>
                                    </Link>
                                    <Link to={`/register`} className={classes.auth}>
                                        <Button variant="outlined" size="small">
                                            Daftar
                                        </Button>
                                    </Link>
                                </>
                            }
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Header
