import React from 'react';
import ReactDOM from 'react-dom';
//import Items from '../components/items';
//import ToolsItems from '../components/items/ToolsItems';
//import {BrowserRouter,Route,} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Content2 from '../components/Content/Content2';
import {Footer} from '../components/footer';
import Search from  '../components/search';
import Account from '../components/My/Account';
import AccountHome from '../components/My/MyAccount';
import routes from '../components/routing/routes';
import Atlantic from '../components/routing/atlantic';
import SubmitListing from '../components/My/SubmitListing2';
import About from './Home/About';
import Contact from './Home/Contact';
import Blog from './Home/Blog';
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from 'react-router-dom';
import ToolsItems from './items/ToolsItems';
export class Main extends React.Component
{
render() {
  var mainDiv={};
  var headerDiv={};
  var contentDiv={};
  var footerDiv={};
    return(
		<BrowserRouter>
			<Header/>
			
				
					
						<Route exact path ="/" component={Content2} />
						<Route exact path ="/Account" component={Account} />
						
						<Route path ="/Account/Home" component={AccountHome} />
						<Route path ="/Search" component={Search} />
						<Route path ="/Atlantic" component={Atlantic} />
						<Route path ="/Account/Post" component={SubmitListing} />
						<Route path="/rentals/MACONNERIE" component={Content} />
						<Route path="/rentals/menuiserie" component={Content} />
						<Route path="/Home/About" component={About} />
						<Route path="/Home/Contact" component={Contact} />
						<Route path="/blog" component={Blog} />
					
				
			
			<Footer />
			
		</BrowserRouter>
    );
  }
}
/*
<div className="container" style={{display:'', marginTop:'-19px', border:'1px dashed #000', width:'90%'}}>
647-1201
800-431-5595
"0"
0 - border b4 footer !
1
categories
promotions
suivez-nozs !
2. Routing !
3. SPA !
II- React Native 
*/


/*
<BrowserRouter>
<body className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
		<div className="wrapper">
			<Header />
			<div className="content-wrapper">
				<Route exact path ="/" component={Content2} />
				<Route exact path ="/Account" component={Account} />
				
				<Route path ="/Account/Home" component={AccountHome} />
				<Route path ="/Search" component={Search} />
				<Route path ="/Atlantic" component={Atlantic} />
				<Route path ="/Account/Post" component={SubmitListing} />
				<Route path="/rentals/MACONNERIE" component={Content} />
				<Route path="/rentals/menuiserie" component={Content} />
				<Route path="/Home/About" component={About} />
				<Route path="/Home/Contact" component={Contact} />
				<Route path="/blog" component={Blog} />
			
			</div>
		</div>
		<Footer />
	</body>
	</BrowserRouter>
	
<div>asfdafd
	<div style={{backgroundColor:'red'}}>oooo</div>
	<div style={{backgroundColor:'yellow'}}>9999</div>
	<div style={{backgroundColor:'green'}}>pppp</div>
	<div style={{display:'inline'}}>
		<div style={{backgroundColor:'blue',borderLine:'red dashed'}}>
			111
		</div>
		<div style={{backgroundColor:'blue',borderLine:'red dashed'}}>
			222
		</div>
		<div style={{backgroundColor:'blue',borderLine:'red dashed'}}>
			333
		</div>
    </div>
</div>
<div className="row" style={{backgroundColor:'red'}}>oooo</div>
					<div className="row" style={{backgroundColor:'yellow'}}>9999</div>
					<div className="row" style={{backgroundColor:'green'}}>pppp</div>
*/