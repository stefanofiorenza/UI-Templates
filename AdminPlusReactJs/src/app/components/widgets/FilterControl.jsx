import React from 'react';
import classnames from 'classnames'


export default function FilterControl(props) {

	const controlClass='fltrCtrl '+props.span;

	const ctrlHeight=(props.width)?  parseInt(props.width) : 800;
		const panelSize={
				height:ctrlHeight
	}
   	return (
   		<div className={controlClass} >	
			<label htmlFor={props.id}>{props.label}</label>
			<div className="input-prepend">								
				{props.children}
			</div>							
		</div>
  	);   

}