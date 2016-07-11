import React from 'react';

class BlogItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='blog-item'>
                <img src='http://placehold.it/200' alt='item 1'></img>
                <h2>{this.props.title}</h2>
                <div>
                    <span>{this.props.location}</span>
                    |
                    <span>{this.props.team}</span>
                </div>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default BlogItem;
