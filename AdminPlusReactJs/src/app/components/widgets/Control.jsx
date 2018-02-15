import React from 'react';

export default function Control (props) {

	const classNames=(props.span)? 'fltrCtrl span'+props.span : 'fltrCtrl';

	   	return (
	   		<div className={classNames} >	
				<label htmlFor={props.id}>{props.label}</label>
				<div className="input-prepend">								
					{props.children}
				</div>							
			</div>
	  	);
}