import Immutable from 'immutable';

export function immutableCollection2Array(data){

	let array=[];

	if(data){
		if(Immutable.Iterable.isIterable(data)){
            let arrayOfMaps= data.toArray();
            arrayOfMaps.forEach( objAsMap => array.push(objAsMap.toObject()))
		}else{
            array= data;
		}
	}

	return array;
}

export function copyAttachmentsReplacingElement(array, elemToReplace){
    var newArray= [];

    for (let i=0; i<array.length; i++){
        if(elemToReplace.id==array[i].id) {
            newArray[i]={
                id:elemToReplace.id,
                removeId:elemToReplace.removeId,
                exists:elemToReplace.exists,
                file:elemToReplace.file
            };
        }else{
            newArray[i]={
                id:array[i].id,
                removeId:array[i].removeId,
                exists:array[i].exists,
                file:array[i].file
            };
        }
    }
    return newArray;
}

export function objToMap(responseData){

	let objAsMap=new Map();
	for(let name in responseData){  		
  		objAsMap.set(name,responseData[name]);
	}
	return objAsMap;
}

export function objToArray(responseData){
	let objAsArray=[];
	for(let name in responseData){  		
  		objAsArray.push(responseData[name]);
	}
	return objAsArray;
}

export function valuesToSelectDataArray(values){
	let selectDataArray=[];
	if(values.length>0){
		values.map(function(val) {	 					
			selectDataArray.push({value:val, label:val}) ;     					
		})		
	}
	return selectDataArray;
	
}

export function toSelectDataArray(categoryItems){
	let selectDataArray=[];
	categoryItems.map(function(item) {	  
		let {id,name} =item;				
		selectDataArray.push({value:id, label:name}) ;     					
	})
	return selectDataArray;
}

export function extractSelectedName(categoryItemSelected){
		if(categoryItemSelected && categoryItemSelected.label!='ALL' && categoryItemSelected.length>0){			
			return categoryItemSelected[0].label;
		}
		return '';
}


export function removeFromArray(array, elementToRemove){
	var newArray= [];
	for (i=0; i<array.length; i++){
		if(elementToRemove != array[i]) {
			newArray[i]=array[i];					
		}		
	}
	return newArray;
}

export function dateAsHrString (dateSciFormat){
	if(dateSciFormat){
		var dateAsMillis=dateSciFormat.substring(2); //trim 2 chars 00
		 var date= new Date(parseInt(dateAsMillis));
		 var month=date.getMonth()+1;
	 	return date.getDate()+"/"+month+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+"."+date.getSeconds();
	}else{
		return ' ';
	}
	 
}

export function addToArrayIfMissing(array, elementToAdd, equalityFunction){
	if(!isInArray(array, elementToAdd, equalityFunction)){
		return [...array,elementToAdd];		
	}else{
		return array;
	}
}

export function isInArray(array, elementToCheck, equalityFunction){
	for (let i=0; i<array.length; i++){
		if(equalityFunction(elementToCheck,array[i])) {
			return 	true;			
		}	
	}	
	return false;

}
export function removeFromArrayWithFunc(array, elementToRemove, equalityFunction){
	var newArray= [];
	for (let i=0; i<array.length; i++){
		if(!equalityFunction(elementToRemove,array[i])) {
			newArray[i]=array[i];					
		}		
	}
	return newArray;
}

export function removeFromIdArray(array, elementToRemove){
	var newArray= [];
	for (let i=0; i<array.length; i++){
		if(elementToRemove.id!=array[i].id) {
			newArray[i]=array[i];					
		}		
	}
	return newArray;
}

export function removeFromIdArrayByStrIds(array, elmntsIds){
	var newArray= [];
	let i=0;
	for (let elem of array) {
		if(!elmntsIds.has(''+elem.id)) {
			newArray[i]=elem;	
			i++;			
		}	
	}	
	return newArray;
}

export function updateInIdArray(array, elementToUpdate){
	var newArray= [];
	for (let i=0; i<array.length; i++){
		if(elementToUpdate.id==array[i].id) {
			newArray[i]=elementToUpdate;					
		}else{
			newArray[i]=array[i];
		}		
	}
	return newArray;
}

export function findById(array, elemId){

	for (let i=0; i<array.length; i++){
		if(elemId==array[i].id) {
			return array[i];
		}		
	}
	return null;
}

export function copyArrayReplacingElement(array, elemToReplace){
	var newArray= [];
	for (let i=0; i<array.length; i++){
		if(elemToReplace.id==array[i].id) {
			newArray[i]={id:elemToReplace.id, name: elemToReplace.name};					
		}else{
			newArray[i]={id:array[i].id, name: array[i].name};
		}		
	}
	return newArray;

}

export function copyArrayReplacingElementWithEqFunc(array, elemToReplace, equalityFunction){

	var newArray= [];
	for (let i=0; i<array.length; i++){
		if(equalityFunction(elemToReplace,array[i])) {
			newArray[i]=elemToReplace;					
		}else{
			newArray[i]=array[i];
		}		
	}
	return newArray;
}

export function copyArrayRemovingElementWithEqFunc(array, elemToReplace, equalityFunction){

	var newArray= [];
	let j=0;
	for (let i=0; i<array.length; i++){
		if(!equalityFunction(elemToReplace,array[i])) {
			newArray[j]=array[i];
			j++;				
		}	
	}
	return newArray;
}


/*
export function findIndexInArrayById(array, elemId){

	for (let i=0; i<array.length; i++){
		if(elemId==array[i].id) {
			return i;
		}		
	}
	return -1;
}*/

