import React from 'react'
import { Card, CardContent, CardMedia, Divider, Grid, IconButton, TextField, Typography } from '@material-ui/core'
import { AddBoxOutlined, DeleteOutlined, IndeterminateCheckBoxOutlined } from '@material-ui/icons'
import useStyles from './style'
import convertToRupiah from '../../../utils/convertToRupiah'
import { useDispatch } from 'react-redux'
import { addProductToCart, reduceProductFromCart, removeProductFromCart } from '../../../config/redux/actions'
import { Link } from 'react-router-dom'

function CartProductCard({product}) {
    const classes = useStyles()

    const dispatch = useDispatch()

    const handlePlus = (product) => {
        addProductToCart(dispatch, product)
    }
    
    const handleMinus = (product) => {
        if (product.qty > 1) {
            reduceProductFromCart(dispatch, product)
        }
    }
    
    const handleRemove = (product) => {
        removeProductFromCart(dispatch, product)
    }

    return (
        <Card className={classes.card} elevation={0}>
            <Grid container>
                <Grid item md={3}>
                    <Link to={`/product/${product.id}`}>
                        <CardMedia
                            image={product.image}
                            title={product.title}
                            className={classes.cardMedia}
                        />
                    </Link>
                </Grid>
                <Grid item md={9}>
                    <CardContent>
                        <Link to={`/product/${product.id}`} className={classes.title}>
                            <Typography variant="subtitle1">{product.title}</Typography>
                        </Link>
                        <Typography variant="subtitle2" className={classes.price}>{convertToRupiah(product.price)}</Typography>
                        <div className={classes.bottomCard}>
                            <Typography variant="caption">{product.category}</Typography>
                            <div className={classes.bottomRightCard}>
                                <IconButton onClick={() => handleMinus(product)}>
                                    <IndeterminateCheckBoxOutlined />
                                </IconButton>
                                <TextField
                                    className={classes.qty}
                                    type="text"
                                    value={product.qty}
                                />
                                <IconButton onClick={() => handlePlus(product)}>
                                    <AddBoxOutlined />
                                </IconButton>
                                <Divider orientation="vertical" flexItem className={classes.divider} />
                                <IconButton onClick={() => handleRemove(product)}>
                                    <DeleteOutlined />
                                </IconButton>
                            </div>
                        </div>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CartProductCard
