import React from 'react';
import classnames from 'classnames'

export default class Panel extends React.Component {


	constructor(props) {
		super(props);
	}

  	render() {

  		const headerClasses='heading glyphicons '+this.props.icon;
  		const panelClasses= (this.props.className)? classnames(this.props.className) : "widget widget-gray widget-body-white";
  		const panelWidth=(this.props.width)?  parseInt(this.props.width) : 700;
		const panelSize={
				width:panelWidth
		}		
		let bodyHeight={};

		if(this.props.height){
			bodyHeight={height:parseInt(this.props.height)};				
		}		

		return (
		<div className={panelClasses} style={panelSize} >
				<div className="widget-head">			
					<h3 className={headerClasses}><i></i> 
					{this.props.title}
					</h3>
				</div>		
				<div className="widget-body" style={bodyHeight}>		
					{this.props.children}		
				</div>
			</div>	
		);
  }
}