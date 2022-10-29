import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {ShoppingBasket} from "@material-ui/icons";
import BasketItem from "./BasketItem";

const Backet = (props) => {
    const {order, removeFromOrder, cartOpen, closeCart} = props
    return (
        <Drawer
            anchor={'right'}
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={'Корзина'}/>
                </ListItem>
                <Divider/>
                {
                    !order.length ? <ListItem>Корзина пуста!</ListItem> : order.map(item =>
                        <BasketItem key={item.name} {...item} removeFromOrder={removeFromOrder} />
                    )
                }
            </List>
        </Drawer>
    );
};

export default Backet;