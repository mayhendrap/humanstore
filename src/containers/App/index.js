import React, { Component } from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import theme  from './theme'

import { getProductsFromFirebase } from '../../config/redux/actions';
import Header from '../../components/organisms/Header'
import ProductLists from '../ProductLists';
import ProductDetails from '../ProductDetails';
import Register from '../Register';
import Login from '../Login';
import { ProtectRoute } from '../../utils/ProtectRoute';
import ProductCart from '../ProductCart';

export class App extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ProductLists} />
                        <Route path="/product/:id" component={ProductDetails} />
                        <ProtectRoute path="/register" component={Register} />
                        <ProtectRoute path="/login" component={Login} />
                        <Route path="/cart" component={ProductCart} />
                    </Switch>
                </Router>
            </ThemeProvider>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => getProductsFromFirebase(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(App)
