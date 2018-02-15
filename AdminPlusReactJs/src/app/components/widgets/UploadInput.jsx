import React from 'react';

// Requires in template
//<link href="./resources/bootstrap/extend/jasny-bootstrap/css/jasny-bootstrap.min.css" rel="stylesheet">
//<link href="./resources/bootstrap/extend/jasny-bootstrap/css/jasny-bootstrap-responsive.min.css" rel="stylesheet">


export default function UploadInput(props) {
   

	let id=props.cmpState.id;
	let removeId=props.cmpState.removeId;
	let file=props.cmpState.file;
	let fileExists=props.cmpState.exists;


	const classNameUpload=(fileExists)?'fileupload fileupload-exists':'fileupload fileupload-new';
	let previewValue
	if (file && file.name){
		previewValue=file.name;
	}else{
		previewValue='';
	}

   	return (   			
   			<div className={classNameUpload} data-provides="fileupload">								  	
			    	<div className="uneditable-input span3">
			    	<i className="icon-file fileupload-exists"></i>
			    	<span className="fileupload-preview">{previewValue}</span></div>
		      		<span className="btn btn-file">
			    		<span className="fileupload-new" >Select file</span>
			    		<span className="fileupload-exists" >Change</span>
			    		<input id={id} type="file" name={id} onChange={props.onFileSelected}/>
			    	</span>
			    	<a id={removeId} className="btn fileupload-exists" data-dismiss="fileupload" onClick={props.onRemoveUploadFile}>Remove</a>								  	
			</div>	   	 		
  	);
}