import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './Container/AdminPanel/Add';
import AdminPanel from './Container/AdminPanel/AdminPanel';
import EditProductPage from './Container/AdminPanel/EditProductPage';
import Home from './Container/Home/Home';
import AdminContextProvider from './Context/AdminContext';
import ClientContextProvider from './Context/ClientContext';
import Cart from './Container/Cart/Cart';
import AuthContextProvider from './Context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './Container/Auth/Login';
import ForgotPassword from './Container/Auth/ForgotPassword';
import UpdateProfile from './Container/Auth/UpdateProfile';
import Signup from './Container/Auth/Signup';

const Routes = () => {
    return (
        <AuthContextProvider>
            <ClientContextProvider>
                <AdminContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            <Route exact path="/addproduct" component={Add} />
                            <Route exact path="/admin" component={AdminPanel} />
                            <Route exact path="/editproduct" component={EditProductPage} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/forgot-password" component={ForgotPassword} />
                            <Route exact path="/update-profile" component={UpdateProfile} />
                        </Switch>
                    </BrowserRouter>
                </AdminContextProvider>
            </ClientContextProvider>
        </AuthContextProvider>

    );
};

export default Routes;