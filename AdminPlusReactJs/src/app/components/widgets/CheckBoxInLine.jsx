import React from 'react';

export default class CheckBoxInLine extends React.Component {


	constructor(props) {
		super(props);
	}

   render(){

	   	return (
	   		<div className={this.props.span} >
				
					<input name={this.props.name} value={this.props.value} checked={this.props.checked} type="checkbox" className="checkbox" onClick={this.props.onClick} />
				<span>&nbsp; &nbsp;&nbsp;{this.props.label}</span>
			</div>		   	
	  	);
   }

}