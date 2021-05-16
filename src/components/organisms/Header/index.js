import React, { useState } from 'react'
import './style.css'

import { AppBar, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { AccountCircleOutlined, ShoppingBasketOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
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
            <AppBar elevation={0} position="fixed" className="appBar">
                    <Container className="wrapperHeader">
                        <Link to="/" className="storeName">
                            <Typography variant="h6">
                                Humanstore
                            </Typography>
                        </Link>
                        <div className="rightHeader">
                            {
                                isLogin || user.isLogin ?
                                <>
                                    <Link to="/cart" className="cartWrapper">
                                        <IconButton className="cartLogo">
                                            <ShoppingBasketOutlined />
                                        </IconButton>
                                        <Typography variant="caption" className="countCart">{productsQty}</Typography>
                                    </Link>
                                    <Divider orientation="vertical" flexItem />
                                    <div className="accountWrapper">
                                        <Typography variant="caption" className="accountName">
                                            {user.email}
                                        </Typography>
                                        <IconButton
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                        >
                                            <AccountCircleOutlined className="accountIcon"/>
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            className="menuDropdown"
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
                                    <Link to={`/login`} className="auth">
                                        <Button variant="outlined" size="small">
                                            Masuk
                                        </Button>
                                    </Link>
                                    <Link to={`/register`} className="auth">
                                        <Button variant="outlined" size="small">
                                            Daftar
                                        </Button>
                                    </Link>
                                </>
                            }
                        </div>
                    </Container>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Header
