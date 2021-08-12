import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import ProductList from '../Home/ProductList';
import Add from './Add';

const AdminPanel = () => {
    const { currentUser } = useAuth()

    return (
        <div>
            {
                currentUser ? (
                    currentUser.email === 'sher@gmail.com' ? (
                        <>
                            <Add />
                            <ProductList />
                        </>
                    ) : (<></>)
                ) : (<></>)
            }
        </div>
    );
};

export default AdminPanel;