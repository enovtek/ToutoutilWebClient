import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './styles/styles.css';

//import '../public/styles/my.css';
import Bootstrap from 'react-bootstrap';

import {Main} from './components/main';


//IMPORTING ALL ROUTES
import routes  from './components/routing/routes';

// BootStraping
//import 'bootstrap/dist/css/bootstrap.min.css';
//import BootStrap from 'boostrap';

import App from './App';
import * as serviceWorker from './serviceWorker';



const allRoutes= routes;
/*
ReactDOM.render(
<Main />,
allRoutes,
document.getElementById("App"));
*/

ReactDOM.render(
<Main />, 
document.getElementById('root'));


//ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();


