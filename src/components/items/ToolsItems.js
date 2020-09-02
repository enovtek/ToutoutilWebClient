import React from 'react';
import ReactDOM from 'react-dom';
class ToolsItems extends React.Component
{
	
	constructor(props)	
	{
		super(props);
	}
	render()
	{
		var tool={rentalTitle:'sadasd'}
		var rentalTitle='Moule de 12 cms a Louer';
		var rentalCategory='MACONNERIE';
		var rentalPrice='1200F.CFA / jr';
		var rentalDate="2020/07/30";
		var rentalDateExpiration="2100/07/30";
		var bookRental="Reserver";
		
		const toolItemThumbnail={ marginTop:'1px', clear:'both'}
	return(
			<div className="row" style={{borderBottom:'3px', backgroundColor:'#000'}}>
					{this.props.tools.map((tool)=>(
					<div className="col-md-4" style={{backgroundColor:'yellow', 'border':'1px dashed', display:'inline'}}>
						<div style={{border:'1px dotted red'}}>
							<div style={{width:'auto'}}>
								<div style={{border:'1px dotted blue', width:'auto', backgroundColor:'#3e1'}}><h5>{rentalTitle}</h5></div>
							</div>
								<span className="time">{tool.rentalCategory}</span>
									<span>{rentalDateExpiration}</span>
										<div className="commentCount">
											<span>Cocy</span>
											<span>
												{tool.rentalPublisher}
											</span>
										</div>
							<div style={toolItemThumbnail}>
								<div style={{float:'left', width:'75%' , border:'1px dotted #000', color:'#000'}}>
									<img className="toolItemThumbnail"
									src= "http://localhost:3000/images/itemMain.png"/>
								</div>
								<div style={{float:'left', width:'25%', color:'#000'}}>
									<div><h4>kjkj</h4></div>
									<div><h4>kkkk</h4></div>
									<div><h4>090</h4></div>
								</div>
							</div>
						</div>
						
						<div style={{}}>
							<div style={{width:'33%',float:'left'}}>
								<div><h4>{bookRental}</h4></div>
								<div><h4>{rentalCategory}</h4></div>
								<div><h4>{rentalPrice}</h4></div>
							</div>
							<div style={{width:'33%',float:'left'}}>
								<div><h4>{bookRental}</h4></div>
								<div><h4>{rentalCategory}</h4></div>
								<div><h4>{rentalPrice}</h4></div>
							</div>
							<div style={{width:'33%',float:'right'}}>
								<div><h4>{bookRental}</h4></div>
								<div><h4>{rentalCategory}</h4></div>
								<div><h4>{rentalPrice}</h4></div>
							</div>
						</div>
					</div>
				))}	
			</div>
		)	
	}
	componentWillUnmount()
	{
		
	}
	componentDidMount()
	{
		
	}
} 
export default ToolsItems;