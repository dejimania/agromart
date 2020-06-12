import React, { Component } from 'react';
import { CategoryNavigation } from '../shop/CategoryNavigation';
import { ProductList } from '../shop/ProductList';
import { CartSummary } from './CartSummary';
import { ErrorBoundary } from '../shop/ErrorBoundary';
import { ProductPageConnector } from './ProductPageConnector';
import { PaginationControls } from '../PaginationControls';

const ProductPages = ProductPageConnector(PaginationControls);

export class Shop extends Component {

  handleAddToCart = (...args) => {
    this.props.addToCart(...args);
    this.props.history.push("/shop/cart");
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">AGRO MART</div>
            <CartSummary { ...this.props } />
          </div>
        </div>
        <div className="row">
          <div className="col-3 p-2">
            <CategoryNavigation baseUrl="/shop/products"
              categories={ this.props.categories} />
          </div>
          <div className="col-9 p-2">
            <ErrorBoundary>
              <ProductPages />
              <ProductList products={ this.props.products }
                addToCart= { this.handleAddToCart }
              />
            </ErrorBoundary>
            
          </div>
        </div>
      </div>
    )
  }
}
