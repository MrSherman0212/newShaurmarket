import { RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { adminContext } from '../../Context/AdminContext';
import { useAuth } from '../../Context/AuthContext';
import './Add.css'

const Add = () => {
    const { createProduct } = useContext(adminContext)
    const { currentUser } = useAuth()
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        category: '',
        image: '',
        description: ''
    })

    const history = useHistory();

    function handleInput(e) {
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value
        }
        setNewProduct(obj)
    }

    function handleClick() {
        createProduct(newProduct)
        setNewProduct({
            title: "",
            price: "",
            category: "",
            image: "",
            description: ""
        })
        history.push('/')
    }

    return (
        <>
            {
                currentUser ? (
                    currentUser.email === 'sher@gmail.com' ? (
                        <>
                            <div className="new-container">
                                <div className="wrapper-add">
                                    <TextField value={newProduct.title} onChange={handleInput} name="title" label="title" />
                                    <TextField value={newProduct.price} onChange={handleInput} name="price" label="price" />
                                    <RadioGroup onClick={handleInput} aria-label="memory" name="memory1">
                                        <FormControlLabel value="Шаурма" control={<Radio />} name="category" label="Шаурма" />
                                        <FormControlLabel value="Напитки" control={<Radio />} name="category" label="Напитки" />
                                        <FormControlLabel value="Другое" control={<Radio />} name="category" label="Другое" />
                                    </RadioGroup>
                                    <TextField value={newProduct.image} onChange={handleInput} name="image" label="image" />
                                    <TextField value={newProduct.description} onChange={handleInput} name="description" label="description" />
                                    <Button onClick={handleClick} variant="contained" color="primary">Add</Button>
                                    <Button onClick={() => history.push('/')} variant="contained" color="secondary">Close</Button>
                                </div>
                            </div>
                        </>
                    ) : (<></>)
                ) : (<></>)
            }
        </>
    );
};

export default Add;