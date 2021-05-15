import React, { Component } from 'react'
import { Breadcrumbs, Button, CardContent, CardMedia, Container, Grid, Typography, withStyles } from '@material-ui/core'
import { connect } from 'react-redux'

import { addProductToCart, getSingleProductFromFirebase } from '../../config/redux/actions'
import convertToRupiah from '../../utils/convertToRupiah'
import useStyles from './style'
import { Link } from 'react-router-dom'

class ProductsDetails extends Component {

    handleAddToCart = () => {
        this.props.addProductToCart(this.props.product)
    }
    
    componentDidMount() {
        const productId = (this.props.match.params.id - 1)
        this.props.getSingleProduct(productId)
    }
    
    render() {
        const { product, classes } = this.props
        let isLogin = false
        if (localStorage.getItem('user')) {
            isLogin = JSON.parse(localStorage.getItem('user')).isLogin
        }
        return (
            <Container className={classes.wrapper}>
                <Breadcrumbs className={classes.breadcrumbs}>
                    <Link to="/" className={classes.breadcrumbsLink}>
                        <Typography variant="body2">
                            Beranda
                        </Typography>
                    </Link>
                    <Typography variant="body2">
                        {product.title}
                    </Typography>
                </Breadcrumbs>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <CardMedia component="img" title={product.title} image={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.title} className={classes.cardMedia}/>
                    </Grid>
                    <Grid item md={4}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="caption" className={classes.category}>
                                {product.category}
                            </Typography>
                            <Typography gutterBottom variant="h4" className={classes.title}>
                                {product.title}
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                {convertToRupiah(product.price)}
                            </Typography>
                            <Typography gutterBottom variant="body2" className={classes.desc}>
                                {product.desc}
                            </Typography>
                            {
                                isLogin ?
                                    <Button variant="contained" disableElevation className={classes.button} onClick={this.handleAddToCart}>Masukan Keranjang</Button>
                                :
                                    <Link to="/login" className={classes.loginLink}>
                                        <Button variant="contained" disableElevation className={classes.button}>Masuk</Button>
                                    </Link>
                            }
                        </CardContent>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleProduct: (productId) => getSingleProductFromFirebase(dispatch, productId),
        addProductToCart: (productId) => addProductToCart(dispatch, productId)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ProductsDetails))
