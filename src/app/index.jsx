require('file-loader?name=[name].[ext]!../index.html');

//import data
import Items from './items.json';

//import typefaces
require('./typefaces/FidelitySans/_fidelity-sans.scss');
require('./typefaces/Roboto/_roboto.scss');

import React from 'react';
import {render} from 'react-dom';

//import sass
import './_main.scss';

//import components
import BlogItem from './modules/BlogItem/BlogItem.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: Items};
    }

    render() {
        return(
            <div className='main'>
                {/*console.log('APP', this.state)*/}
                {this.state.data.map(function(result) {
                    return <BlogItem key={result.id} data={result.data}/>
                })}
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
