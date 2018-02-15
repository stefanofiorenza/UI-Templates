import React from 'react';
import classnames from 'classnames'

export default function StatsTextBox (props) {


/*
  		const headerClasses='heading glyphicons '+this.props.icon;
  		const panelClasses= (this.props.className)? classnames(this.props.className) : "widget widget-gray widget-body-white";
  		const panelWidth=(this.props.width)?  parseInt(this.props.width) : 700;
		const panelSize={
				width:panelWidth
		}		
		let bodyHeight={};

		if(this.props.height){
			bodyHeight={height:parseInt(this.props.height)};				
		}	*/	

		//const headerClasses='glyphicons '+props.icon;


		{/*}
			<div className="widget widget-3">
			<div className="widget-head">
					<h4 className="statsheading">
						<span  className={headerClasses}><i></i></span>
						{props.title}
					</h4>
				</div>			
				<div className="widget-body large stats-body">
					{props.children}
				</div>				
			</div>*/


/*
		<div className="widget widget-3">
				<div className="widget-head">
					<h4 className="statsheading">
						<span><i></i></span>
						{props.title}
					</h4>
				</div>
				<div className="widget-body large statsheading">
					{props.children}
				</div>
			</div>*/






		}

		return (
			<div className="widget widget-3">
				<div className="statsheading">										
					{props.title}					
				</div>
				<div className="widget-body large statsheading">
					{props.children}
				</div>
			</div>	
		);
}