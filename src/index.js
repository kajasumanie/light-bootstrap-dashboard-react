import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import App from 'containers/App/App.jsx';
import Components from 'containers/Components/Components.jsx';

import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/light-bootstrap-dashboard.css';
import './css/demo.css';
import './css/pe-icon-7-stroke.css';
import './css/m-style.css';



const history = createBrowserHistory();

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/components" name="Components" component={Components}/>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
