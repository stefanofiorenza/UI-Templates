import React from 'react';

import styles from '../../css/FilterPanel.css';

export default function FilterPanel (props) {

  		let filterBarHeight=(props.height)? parseInt(props.height) : 55;
  		let filterBarMarginTop=(props.marginTop)? parseInt(props.marginTop) : 10;
  		let filterBarMarginBottom=(props.marginBottom)? parseInt(props.marginBottom) : 2;
		let filterBarTxtStyle=(props.txtSize)? parseInt(props.txtSize) : 22;

		const fltBarStyle={height:filterBarHeight};  

		/*
		const fltCtrlDivStyle={
			marginTop:filterBarMarginTop,
			marginRight:0,
			marginBottom:2,
			marginLeft:filterBarMarginBottom
		}
		const txtStyle={height:filterBarTxtStyle};
		 */
		var fltrClassName = [
			styles.filterBar,
            styles.filterBar2
		].join(' ');

		return (
			<div className={fltrClassName} style={fltBarStyle}>
					<div className="lbl glyphicons cogwheel"><i></i>Filters</div>			
				 	 <div>				 	
				 	 	{props.children} 								 			
	 		 		</div>
				</div>	
			

		);
  
}