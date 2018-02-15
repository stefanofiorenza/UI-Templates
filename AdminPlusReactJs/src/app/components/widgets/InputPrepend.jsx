import React from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';

export default class InputPrepend extends React.Component {


	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(newProps){
 		return !shallowEqual(this.props, newProps);
	}

	render(){



		const spanClass=(this.props.icon) ? "add-on glyphicons "+this.props.icon : "add-on";
		let heightSize=(this.props.height)?this.props.height:30;
		
 		const txtStyle={
 			height:heightSize 			
 		}

 		if(this.props.width){
 			txtStyle.width=parseInt(this.props.width)
 		}

/*
 		let onBlurHandler
 		if(this.props.validate){
			onBlurHandler=this.props.validate;
 		}else if(this.props.onBlur){
 			onBlurHandler=this.props.onBlur;
 		}else{
 			onBlurHandler=new function(){};
 		}*/

 		let validationClass;
		if(this.props.valid==undefined){
			validationClass='';
		}else{
			validationClass=(this.props.valid)? '' :' alert alert-error';
		} 		
 		let inputClass=this.props.className+ validationClass;

   	   	return (
   	   		<div>
		   		<label htmlFor={this.props.htmlFor}>{this.props.label}</label>
				<div className="input-prepend">
					<span className={spanClass}><i></i></span>
					<input	type="text" id={this.props.id} readOnly={this.props.readOnly} value={this.props.value} 
					name={this.props.name} className={inputClass} onChange={this.props.onChange} onBlur={this.props.onBlur} style={txtStyle} />
				</div>
			</div>
	  	);
	}

}