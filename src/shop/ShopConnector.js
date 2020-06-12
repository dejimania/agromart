import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ShopActions from '../data/ActionCreators';
import { DataTypes } from '../data/Types';
import { Shop } from '../shop/Shop';
import * as CartActions from '../data/CartActionCreators';
import { CartDetails } from './CartDetails';
import { DataGetter } from '../data/DataGetter';
import { Checkout } from './Checkout';
import { Thanks } from './Thanks';

// const mapStateToProps = (dataStore) => ({
//   ...dataStore
// });

const mapDispatchToProps = {
  // loadData,
  // addToCart,
  // updateCartQuantity,
  // removeFromCart,
  // clearCart,
  // placeOrder
  ...ShopActions,
  ...CartActions
};

// const filterProducts = (products = [], category) =>
//   (!category || category === "All") ? products
//  : products.filter((p) =>  p.category.toLowerCase() === category.toLowerCase());


export const ShopConnector = connect((ds) => ds, mapDispatchToProps)(
  class extends Component {

    selectComponent = (routeProps) => {
      const wrap = (Component, Content) => {
        return <Component { ...this.props } { ...routeProps}>
          { Content && wrap(Content) }
        </Component>
      }
      switch (routeProps.match.params.section) {
        case "products":
          return wrap(DataGetter, Shop);

        case "cart":
          return wrap(CartDetails);

        case "checkout":
          return wrap(Checkout);

        case "thanks":
          return wrap(Thanks);

        default:
          return <Redirect to="/shop/products/all/1" />
      }
    }

    render() {
      return (
        <Switch>
          <Redirect from="/shop/products/:category"
            to="/shop/products/:category/1" exact={ true }
          />
          <Route path={ "/shop/:section?/:category?/:page?" }
            render={ (routeProps) => this.selectComponent(routeProps) }/>
          {/* <Route path={ "/shop/products/:category/:page" }
            render={ (routeProps) => {
              return <DataGetter { ...this.props } { ...routeProps }>
                <Shop { ...this.props } { ...routeProps } />
              </DataGetter>
            }}
          />
          <Route path="/shop/cart"
            render={ (routeProps) => {
              return <CartDetails { ...this.props} { ...routeProps }/>
            } }
          />
          <Route path="/shop/checkout"
            render={ (routeProps) => {
              return <Checkout { ...this.props } { ...routeProps }/>
            }}
          />
          <Route path="/shop/thanks"
            render={ (routeProps) => {
              return <Thanks { ...this.props } { ...routeProps }/>
            }}
          />
          <Redirect to="/shop/products/all/1" /> */}
        </Switch>
      );
    }

    componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);

    // componentDidMount() {
    //   this.props.loadData(DataTypes.CATEGORIES);
    //   this.props.loadData(DataTypes.PRODUCTS);
    // }
  }
)