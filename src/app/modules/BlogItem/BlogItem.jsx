import React from 'react';
import {render} from 'react-dom';

class BlogItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='blog-item'>
                {/*console.log('child', this.props)*/}
                <img src='http://placehold.it/200' alt='item 1'></img>
                <h2>{this.props.data.title}</h2>
                <div>
                    <span className='blog-item__location'>{this.props.data.location}</span>
                    |
                    <span>{this.props.data.team}</span>
                </div>
                <p className='blog-item__desc'>{this.props.data.description}</p>
            </div>
        )
    }
}

export default BlogItem;
