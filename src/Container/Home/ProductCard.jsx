import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { adminContext } from '../../Context/AdminContext';
import { Link } from 'react-router-dom';
import "./ProductCard.css"
import { clientContext } from '../../Context/ClientContext';
import { useAuth } from '../../Context/AuthContext';

const useStyles = makeStyles({
    root: {
        width: 240,
        marginTop: 25,
        margin: 40,
        ['@media all and (max-width:1024px)']: {
            width: 200,
            margin: 20
        },
        ['@media all and (max-width:768px)']: {
            width: 160,
            margin: 7
        }
    },
    cartcontent: {
        "&:last-child": {
            paddingBottom: 0
        }
    },
    image: {
        maxHeight: 180
    },
    color: {
        backgroundColor: '#fff176'
    }
});


export default function ProductCard({ product }) {
    const classes = useStyles();
    const { deleteProduct, getProductToEdit } = useContext(adminContext)
    const { addAndDeleteProductInCart, checkProductInCart } = useContext(clientContext)
    const { currentUser } = useAuth()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.image}
                component="img"
                alt="Нет изображения"
                height="140"
                image={product.image}
                title="Contemplative Reptile"
            />
            <CardContent className={classes.cartcontent} padding="0">
                <Typography gutterBottom component="span">
                    {product.title}
                </Typography>
                <div className="product-desc">
                    <span variant="body2" component="p">
                        {product.description}
                    </span>
                </div>
                <div className="product-info">
                    <div className="product-price">
                        <span variant="body2" component="p">
                            {product.price} сом
                        </span>
                    </div>
                    <div className="product-space"></div>
                    <div className="product-cart">
                        <button
                            className="cart-btn"
                            // color={checkProductInCart(product.id) ? "secondary" : "primary"}
                            style={checkProductInCart(product.id) ? { backgroundColor: "green", color: 'white' } : { backgroundColor: "orange" }}
                            onClick={() => addAndDeleteProductInCart(product)}>
                            {checkProductInCart(product.id) ? 'в корзине' : 'в корзину'}
                        </button>
                    </div>
                </div>
            </CardContent>
            {
                currentUser ? (
                    currentUser.email === 'sher@gmail.com' ? (
                        <CardActions>
                            <Button onClick={() => deleteProduct(product.id)} size="small" color="primary">
                                Удалить
                            </Button>
                            <Link to="/editproduct">
                                <Button onClick={() => getProductToEdit(product.id)} size="small" color="primary">
                                    Изменить
                                </Button>
                            </Link>
                        </CardActions>
                    ) : (<></>)
                ) : (<></>)
            }
            {/* <Typography className={classes.price} gutterBottom variant="h5" component="h2">
                {product.price}
            </Typography> */}
        </Card >
    );
}
