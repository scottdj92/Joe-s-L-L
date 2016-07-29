import React from 'react';
import {render} from 'react-dom';

//require("../../typefaces/FidelitySans/_fidelity-sans.scss");

class BlogItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='blog-item columns'>
                {/*console.log('child', this.props)*/}
                <div className='column is-1'>
                    <img className='blog-item__image' src={'assets/' + this.props.data.iconSrc} alt={'item-' + this.props.id}></img>
                </div>
                <div className='column is-11'>
                    <h2 className='blog-item__title'>{this.props.data.title} <img className="title-arrow" src='assets/arrow.svg'></img></h2>
                    <span className='blog-item__location-team'>{this.props.data.location} | {this.props.data.team}</span>
                    <p className='blog-item__desc'>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}

export default BlogItem;
