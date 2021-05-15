import React from 'react'
import { Button, Card, Container, Divider, Grid, Typography } from '@material-ui/core'
import useStyles from './style'
import CartProductCard from '../../components/organisms/CartProductCard'
import { useSelector } from 'react-redux'
import convertToRupiah from '../../utils/convertToRupiah'

function ProductCart() {
    const classes = useStyles()
    const { cart, productsQty, totalPriceProducts } = useSelector(state => state)
    return (
        <Container className={classes.cartWrapper}>
            <Grid container spacing={3}>
                <Grid item sm={12} md={8}>
                    <Typography variant="h6">
                        Keranjang
                    </Typography>
                    <Divider />
                    {
                        cart.map(product => {
                                return (
                                            <CartProductCard
                                                key={product.id}
                                                product={product}
                                            />
                                        )
                            }
                        )
                    }
                </Grid>
                <Grid item sm={12} md={4}>
                    <Card elevation={0} className={classes.card}>
                        <Typography variant="h6" className={classes.cardHeaderText}>
                            Ringkasan belanja
                        </Typography>
                        <Grid container className={classes.totalPriceBetween}>
                            <Grid item>
                                <Typography variant="body2">
                                    Total Harga ({productsQty} barang)
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2">
                                    {convertToRupiah(totalPriceProducts)}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" className={classes.divider}/>
                        <Grid container className={classes.totalPriceBetween}>
                            <Grid item>
                                <Typography variant="h6" className={classes.totalPrice}>
                                    Total Harga ({productsQty} barang)
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" className={classes.totalPrice}>
                                    {convertToRupiah(totalPriceProducts)}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Button variant="contained" disableElevation className={classes.button}>
                            Beli({productsQty})
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductCart
