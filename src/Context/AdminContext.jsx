import axios from 'axios';
import React, { useReducer } from 'react';
import { useContext } from 'react';
import { JSON_API } from '../helpers/constants';
import { clientContext } from './ClientContext';

export const adminContext = React.createContext()

const INIT_STATE = {
    products: null,
    edit: [],
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT_TO_EDIT":
            return { ...state, edit: action.payload }
        default:
            return state
    }
}

const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const { getProducts } = useContext(clientContext)

    const createProduct = async (newProduct) => {
        await axios.post(JSON_API, newProduct)
        getProducts()
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${JSON_API}/${id}`)
        getProducts()
    }

    const getProductToEdit = async (id) => {
        const { data } = await axios(`${JSON_API}/${id}`)

        dispatch({
            type: "GET_PRODUCT_TO_EDIT",
            payload: data
        })
    }

    const saveEditedProduct = async (product) => {
        await axios.patch(`${JSON_API}/${product.id}`, product)
        getProducts()
    }

    return (
        <adminContext.Provider value={{
            products: state.products,
            productToEdit: state.productToEdit,
            edit: state.edit,
            createProduct,
            getProducts,
            deleteProduct,
            getProductToEdit,
            saveEditedProduct
        }}>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;