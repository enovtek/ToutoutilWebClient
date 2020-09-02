import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
export default class CategoryItems extends React.Component
{
	constructor(props){
		super(props);
		
		this.state={
			inputVal: 'Clue Mediator',
			
			//tools:[{},{}]
		}
		//this.LoadItemsRentals =this.LoadItemsRentals.bind(this);
		
		//Function in the props Constructor
		
		this.onInputChange = this.onInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		//this.props.handleInputValue = this.props.handleInputValue.bind(this);
	}
	handleSubmit(){
		//this.props.handleInput(this.state.inputVal);	
	}
	onInputChange(e){
		this.setState({inputVal: e.target.value});
	}
	/*
	LoadItemsRentals=() =>
	{	
		var category= this.toolsCategory;	
		//alert(this.state.inputVal);
		//alert(e.target.value);
		this.setState({category:'e.target.value'});
		//this.setState({inputVal: e.target.value});
	}*/
	
	GetRentalsByCategory =(item)=>{
		//alert(item);
		fetch('http://localhost:52424/Rentals/Rentalsservice.svc/rentals/'+item)
		.then(response =>response.json())
		.then((data)=>{
			//this.setState({this.props.tools:data});
			//console.log(this.state.tools);
			
			//this.props.tools=data;	
			//this.setState({this.props.tools:data})		
		})
		//alert(item);
		//alert("Donnneee");
		//alert(this.props.tools);
	}
	MenuCategoriesHandler=(e) =>{
		//alert(e.target.id);
		//GetRentalsByCategory(e.target.id);
	}
	render()
	{
		var itemsCategories = 
			[
				{
				'reference' : 'V24MD', 
				'identifiant': '2444',
				'title': 'a louer rapido rapido rapido',
				'categoryId': '1',
				'category': 'MENUISERIE',
				'date de plublication' : '2019-11-09',
				'date de expiration' : '9999-99-99',
				'duree': ' 45 jrs',
				'locateur' : 'kevin kindi',
				'photo' : 'http://localhost:3000/images/itemMain.png'	
				}
				,
				{
				'reference' : 'V24MD', 
				'identifiant': '2444',
				'title': 'a louer rapido rapido rapido',
				'categoryId': '2',
				'category': 'MACONNERIE',
				'date de plublication' : '2019-11-09',
				'date de expiration' : '9999-99-99',
				'duree': ' 45 jrs',
				'locateur' : 'kevin kindi',
				'photo' : 'http://localhost:3000/images/itemMain.png'	
				}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '8',
				'category': 'FERRAILLAGE'}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '7',
				'category': 'PEINTRE'}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '4',
				'category': 'TAILLEUR'}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '5',
				'category': 'FORGERON'}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '6',
				'category': 'MENUISERIE-ALLU'}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '9',
				'category': 'EBENENISTERIE'}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '10',
				'category': 'CARRELEUR'}, {
				'title': 'a louer rapido rapido rapido',
				'categoryId': '11',
				'category': 'ELECTRICITE'}, 
			];
	return(
	//var CategoryItems = React.createReactClass
	//(
	<section className="content">
		<div className="container-fluid">
			<div className="row">
				<ul role="menu" className="scrollable-menu" style={{height:'auto', maxHeight:'180px', overflowX:'hidden'}}>{itemsCategories.map((itemCategory)=>(
					<li style={{listStyle:'none', display:'inline', marginLeft:'5px', marginRight:'5px'}}>
							<NavLink to={`/rentals/${itemCategory.category}`} value={itemCategory.categoryId} style={{color:'#000'}}
								id={itemCategory.categoryId} onClick={() =>this.props.GetAllRentalsBy(2)}>{itemCategory.category}
							</NavLink>
					</li>
				))}
				</ul>
			</div>
			<div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">CPU Traffic</span>
                <span class="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
              
            </div>
            
          </div>
          
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-thumbs-up"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Likes</span>
                <span class="info-box-number">41,410</span>
              </div>
              
            </div>
            
          </div>
          

          
          <div class="clearfix hidden-md-up"></div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-success elevation-1"><i class="fas fa-shopping-cart"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Sales</span>
                <span class="info-box-number">760</span>
              </div>
              
            </div>
            
          </div>
          
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">New Members</span>
                <span class="info-box-number">2,000</span>
              </div>
              
            </div>
            
          </div>
          
        </div>
		</div>
	</section>
	)
  }
}
//export default;
//5/ 638 4706
/*
2038:
onClick={this.LoadItemsRentals.bind(this)}>{itemCategory.category}

Arret de paiement - RBC :; formulaire ---- en succursales --- arret de paiement ---

xoom: 877-815-1531---415-395-4225

<NavLink to={`/rentals/${itemCategory.category}`} value={itemCategory.category} 
							onClick={this.props.clickHandler}>{itemCategory.category} --
							MenuCategoriesHandler
						</NavLink>
						
id={itemCategory.categoryId} onClick={() =>this.GetRentalsByCategory(itemCategory.categoryId)}>{itemCategory.category}
*/