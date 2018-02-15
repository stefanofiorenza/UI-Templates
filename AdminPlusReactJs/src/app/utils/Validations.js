

export function isEmpty(field){
	if (field==undefined || field == null || field == "" || field == " ") {       
        return true;
    }
    return false;
}

export function isNotNumeric(field){
	if(!isEmpty(field)){
		return isNaN(field);
	}
	return false; //is empty
}
/*
export function isValidEmail(field){
}*/

export function isValidEmail(field){
	 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(field);
}


