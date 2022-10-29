import {IconButton, ListItem, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";

const BasketItem = (props) => {
    return (
        <ListItem className='list-group-item'>
            <Typography
                variant={'body2'}
            >
                {props.name} {props.price}руб x{props.quantity}
            </Typography>
            <IconButton
                onClick={() => props.removeFromOrder(props.id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;