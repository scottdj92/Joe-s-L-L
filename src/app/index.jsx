require('file-loader?name=[name].[ext]!../index.html');

import React from 'react';
import {render} from 'react-dom';

//import sass
import './_main.scss';

//import components

class App extends React.Component {
    render() {
        return(
            <div id='app' className='main'>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
