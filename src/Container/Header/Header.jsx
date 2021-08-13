import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import { clientContext } from '../../Context/ClientContext';
import { Alert, Dropdown } from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"

const Header = () => {
    const history = useHistory()
    const { productsCountInCart, getProducts } = useContext(clientContext)
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()

    async function handleLogout() {
        setError("")

        try {
            await logout()
        } catch {
            setError("Failed to log out")
        }
    }

    async function handleUpdate() {
        history.push("/update-profile")
    }

    async function handleLogin() {
        history.push("/login")
    }

    function fetchProducts(params, value) {
        let search = new URLSearchParams(history.location.search)
        search.set(params, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProducts(history)
    }

    function reset() {
        history.push('/')
        getProducts(history)
    }

    return (
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <div className="header-info">
                        <div className="logo">
                            <img className="img-logo" src="https://image.flaticon.com/icons/png/512/123/123268.png" alt="logo" />
                        </div>
                        <p className="header-info__text">Доставка всего за полчаса</p>
                        <p className="header-info__text">0550346897</p>
                    </div>
                    <div className="header-filter">
                        <ul className="filter-list">
                            <button className="filter-btn" value="Шаурма" onClick={(e) => fetchProducts("category", e.target.value)}>шаурма</button>
                            <button className="filter-btn" value="Напитки" onClick={(e) => fetchProducts("category", e.target.value)}>напитки</button>
                            <button className="filter-btn" value="Другое" onClick={(e) => fetchProducts("category", e.target.value)}>другое</button>
                            <button className="filter-btn" onClick={reset}>Сбросить</button>
                        </ul>
                    </div>
                </div>
                <div className="navbar-items">
                    {
                        currentUser ? (
                            currentUser.email === 'sher@gmail.com' ? (
                                <button
                                    className="add-btn"
                                    onClick={() => history.push('/addproduct')}>
                                    +
                                </button>
                            ) : (<></>)
                        ) : (<></>)
                    }
                    <div className="auth d-flex flex-column align-items-center mr-6">
                        <Dropdown>
                            <Dropdown.Toggle variant="default" id="dropdown-basic">

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    currentUser ? (<>
                                        <Dropdown.Item onClick={handleUpdate} href="#/action-1">Update Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout} href="#/action-2">Log Out</Dropdown.Item>
                                    </>
                                    ) : (<>
                                        <Dropdown.Item onClick={handleLogin} href="#/action-2">Log In</Dropdown.Item>
                                    </>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="user-info">
                            {
                                currentUser ? (<>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <strong> Email:</strong> {currentUser.email}
                                </>
                                ) : (
                                    <strong>guest</strong>
                                )
                            }
                        </div>
                    </div>
                    <Link to="/cart">
                        <button className="check-cart__btn">
                            <Badge badgeContent={productsCountInCart} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Header;