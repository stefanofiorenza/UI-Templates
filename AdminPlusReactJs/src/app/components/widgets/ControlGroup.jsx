import React from 'react';

export default function ControlGroup (props) {

	   	return (
			<div className="control-group">
				<label className="control-label" htmlFor={props.htmlFor}> {props.name}</label>
				<div className="controls">
					{props.children}
				</div>
			</div>
	  	);
}