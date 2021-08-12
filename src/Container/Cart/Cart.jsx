import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { clientContext } from '../../Context/ClientContext';
import { calcSubPrice, calcTotalPrice } from '../../helpers/function';
import './Cart.css'

const Cart = () => {
    const { getCart, cartData, deleteCartProducts, changeCountProduct, makeOrder, productsCountInCart } = useContext(clientContext)

    useEffect(() => {
        getCart()
    }, [])

    const handleCountChange = (count, id) => {
        if (count <= 0) {
            count = 1
            changeCountProduct(count, id)
        } else {
            changeCountProduct(count, id)
        }
    }

    const history = useHistory()
    function handleClick() {
        makeOrder()
        history.push('/')
    }
    console.log(cartData);
    return (
        <>
            <div className="cart">
                <Link to="/">
                    <div className="logo-cart">
                        <img className="img-logo" src="https://image.flaticon.com/icons/png/512/123/123268.png" alt="logo" />
                    </div>
                </Link>
                {cartData ? (
                    cartData.length ? (
                        <div >
                            <div className="cart-main">
                                <table className="cart-info">
                                    <thead>
                                        <tr>
                                            <th>Изображение</th>
                                            <th>Нзавание</th>
                                            <th>Цена</th>
                                            <th className="cart-inp__block">Кол-во</th>
                                            <th>Сумма</th>
                                            <th>Удалить</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartData.map(item => (
                                                <tr key={item.product.id} className="cart-item">
                                                    <td> <img width="100" src={item.product.image} /></td>
                                                    <td>{item.product.title}</td>
                                                    <td>{item.product.price}</td>
                                                    <td className="cart-inp__block"><input className="cart-inp" min="1" onChange={(e) => handleCountChange(e.target.value, item.product.id)} type="number" value={item.count} /></td>
                                                    <td>{calcSubPrice(item)}</td>
                                                    <td><button className="cart-delete_btn" onClick={() => deleteCartProducts(item.product.id)}
                                                    >Удалить</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <form className="order-block">
                                <h5>Сумма заказа: {calcTotalPrice(cartData)} сом</h5>
                                <input type="text" name="" id="" placeholder="Ваше имя" />
                                <input type="text" name="" id="" placeholder="Номер телефона" />
                                <input type="text" name="" id="" placeholder="Ваш адрес" />
                                <button type="submit" className="order-btn" onClick={handleClick}>Оформить заказ</button>
                            </form>
                        </div>
                    ) : (
                        <h2>Упс, Вы еще ничего не добавили :D</h2>
                    )
                ) : (
                    <h1>Загрузка</h1>
                )}
            </div>
        </>
    );
};

export default Cart;