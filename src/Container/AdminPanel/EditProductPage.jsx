import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { adminContext } from '../../Context/AdminContext';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Add.css'
import { useAuth } from '../../Context/AuthContext';

const EditProductPage = () => {
    const { edit, saveEditedProduct } = useContext(adminContext)
    const [editProduct, setEditProduct] = useState("")
    const history = useHistory()
    const { currentUser } = useAuth()

    useEffect(() => {
        setEditProduct(edit)
    }, [edit])

    const handleInput = (e) => {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(obj)
    }

    const handleClick = () => {
        saveEditedProduct(editProduct)
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
                                    <div className="wrapper-img">
                                        <img src={editProduct.image ? editProduct.image : "https://i.ytimg.com/vi/LYXnGiXxzlg/maxresdefault.jpg"} />
                                    </div>
                                    <div className="edit-inputs">
                                        <TextField value={editProduct.title} onChange={handleInput} name="title" label="title" />
                                        <TextField value={editProduct.price} onChange={handleInput} name="price" label="price" />
                                        <TextField value={editProduct.category} onChange={handleInput} name="category" label="category" />
                                        <TextField value={editProduct.image} onChange={handleInput} name="image" label="image" />
                                        <TextField value={editProduct.description} onChange={handleInput} name="description" label="description" />
                                    </div>
                                    <div>
                                        <Button onClick={handleClick} variant="contained" color="primary">Save</Button>
                                        <Button onClick={() => history.push('/')} variant="contained" color="secondary">Close</Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (<></>)
                ) : (<></>)
            }

        </>
    );
};

export default EditProductPage