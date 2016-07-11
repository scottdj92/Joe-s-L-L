require('file-loader?name=[name].[ext]!../index.html');

//import data
import items from './items.json';

import React from 'react';
import {render} from 'react-dom';

//import sass
import './_main.scss';

//import components
import BlogItem from './modules/BlogItem/BlogItem.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.data = {};
    }

    componentDidMount() {
        this.data = items;
        //console.log(items);
    }

    render() {
        return(
            <div id='app' className='main'>
                {this.data.map}
                <BlogItem/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
