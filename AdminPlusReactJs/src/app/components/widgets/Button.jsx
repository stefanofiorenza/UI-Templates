import React from 'react';
import classnames from 'classnames'

export default function Button(props) {
   
	const btnIconClass=(props.btnIcon) ? "btn btn-block btn-primary btn-icon glyphicons "+props.btnIcon : "btn btn-block btn-primary btn-default pull-right";
	const btnClass=classnames(btnIconClass, props.className);
	let btnStyle={};

	if(!props.btnIcon){
		const btnWidth=(props.width)? parseInt(props.width) : 60;
		 btnStyle={
			width:btnWidth
		}
	}
	
   	return (
   		 <button type='button' className={btnClass} onClick={props.onClick} style={btnStyle} ><i></i>{props.btnLabel}</button>
  	);
}