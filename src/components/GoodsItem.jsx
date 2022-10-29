import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";

const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;
    return (
        <Grid item xs={12} md={4} sx={{
        }}>
            <Card
                sx={{
                    height: '100%'
                }}
            >
                <CardMedia
                    component={'img'}
                    image={poster}
                    className='card-img-top'
                    alt={name}
                    title={name}
                    sx={{
                        height:140
                    }}
                />
                <CardContent>
                    <Typography
                        variant={'h6'}
                        component={'h3'}
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    );
};

export default GoodsItem;