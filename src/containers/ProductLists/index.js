import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import ProductCard from '../../components/organisms/ProductCard'
import { useSelector } from 'react-redux'

function ProductLists() {
    const products = useSelector(state => state.products)    

    return (
        <Container>
            <Grid container spacing={6} style={{ marginTop: "2rem" }}>
                {
                    products !== undefined && products.length > 0 ? products.map((product) => {
                        return (
                            <Grid item xs={12} sm={4} md={3} key={product.id}>
                                <ProductCard data={product} />
                            </Grid>
                        )
                    }) : 
                    <Container>
                        <Typography style={{ marginTop: "3rem"}}>
                            Loading...
                        </Typography>
                    </Container>
                }
            </Grid>
        </Container>
    )
}

export default ProductLists
