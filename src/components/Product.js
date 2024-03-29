import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';

class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProdukWarpper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={console.log('clicked')
                    }>
                        <Link to='/details'>
                        <img src={img} alt="product" classname="card-img-top"/>
                        </Link>

                    </div>
                    
                </div>
            </ProdukWarpper>
        );
    }
}

export default Product;

const ProdukWarpper = styled.div``;