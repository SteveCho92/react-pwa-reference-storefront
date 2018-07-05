/**
 * Copyright © 2018 Elastic Path Software Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import CartLineItem from './cart.lineitem.jsx';

var Config = require('Config')

class CartMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.empty) {
            return (
                <div className="cart-empty-container">
                    <span className="cart-empty-message">Your shopping cart is empty.</span>
                </div>
            );
        } else {
            return (
                <div className="cart-main-inner table-responsive">
                    <table className="table">
                        <thead className="cart-lineitem-table-headings">
                            <tr>
                                <th className="cart-heading-product"><span className="lineitem-asset-col">Product</span></th>
                                <th className="cart-heading-name">Name</th>
                                <th className="cart-heading-options">Options</th>
                                <th className="cart-heading-availability">Availability</th>
                                <th className="cart-heading-item-price">Unit Price</th>
                                <th className="cart-heading-quantity">Quantity</th>
                                <th className="cart-heading-item-total">Total Price</th>
                                <th className="cart-heading-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cartData['_lineitems'][0]['_element'].map(product => {
                                return (
                                    <CartLineItem key={product['_item'][0]['_code'][0]['code']} item={product} handleQuantityChange={() => { this.props.handleQuantityChange() }} />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default CartMain;