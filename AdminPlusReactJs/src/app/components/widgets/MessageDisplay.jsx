import React from 'react';

export default function MessageDisplay (props) {


	//const divClassName= props.span || 'span5'+ ' '+props.align || 'pull-right'; 
	const msgDisplayClassName=(props.error==true)? 'alert alert-error' :'alert alert-success';	
	const spanMsgStyle=(props.active)? {	display: "block"}: {	display: "none"};
	const divStyle={
		width: (props.width)? props.width : 400,
		float:'right'
	}

	return (
		<div className={props.className} style={divStyle}>
			<span id="msgDisplay" className={msgDisplayClassName} style={spanMsgStyle} onClick={props.onClick}> {props.message} </span>		
		</div>
	);

}




//"span5 pull-right"
// alert alert-success"









				