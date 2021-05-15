import React from 'react'
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './style';

import convertToRupiah from '../../../utils/convertToRupiah'

function ProductCard({data}) {
    const classes = useStyles()

    return (
        <Link to={`/product/${data.id}`} className={classes.link}>
            <Card elevation={0} className={classes.card} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        image={data.image}
                        title={data.title}
                        className={classes.cardMedia}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="caption" className={classes.category}>
                            {data.category}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" className={classes.title}>
                            {data.title}
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            {convertToRupiah(data.price)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default ProductCard
