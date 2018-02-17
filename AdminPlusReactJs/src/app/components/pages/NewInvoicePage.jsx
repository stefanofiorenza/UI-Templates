import React from 'react';
import { Link,hashHistory} from 'react-router';
import { connect } from 'react-redux'
import axios from 'axios';
import * as ApiUrls from '../../config/imt-config.js'
import Button from '../widgets/Button.jsx'
import Panel from '../panels/Panel.jsx'
import VirtualizedSelect from 'react-virtualized-select'
import UploadInput from '../widgets/UploadInput.jsx'
import {valuesToSelectDataArray,copyAttachmentsReplacingElement} from '../../utils/Commons.jsx';
import InputText from "../widgets/InputText.jsx";
import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
//import styles '../../css/NewInvoicePageCls.css';
import styles from '../../css/NewInvoicePageCls.css';

var costTypes=[
    "costType1",
    "costType2",
    "costType3",
    "costType4",
    "costType5"
];

export class NewInvoicePage extends React.Component  {


	constructor(props) {
		super(props);
		this.state={
			invoiceState:{
                id:'invoice',
                removeId:'invoice-rm',
                exists:false,
                file:{}
			},
            selectedCostType:''
		}
        //Invoice Upload handlers
        this.onFileSelected = this.onFileSelected.bind(this);
        this.onRemoveUploadFile = this.onRemoveUploadFile.bind(this);
        this.updateSelectedAttachmentState = this.updateSelectedAttachmentState.bind(this);
	}

    onFileSelected(e){
        var { id, value} = e.target;
        //console.log("Values: id"+id+" Value "+value);

        let attach=e.target.files[0];
       // this.updateSelectedAttachmentState(id,{file:attach, exists:true});

		/*
		 var oldAttachmentObj=this.findAttachmentStateById(id);
		 var newAttachmentObj=Object.assign({},oldAttachmentObj,{file:attach, exists:true});
		 var newState=Object.assign({},this.state,{attachments:copyArrayReplacingElement(this.state.attachments,newAttachmentObj) });
		 this.setState(newState);*/
    }

    updateSelectedAttachmentState(id, newState){
        var oldAttachmentObj=this.findAttachmentStateById(id);
        var newAttachmentObj=Object.assign({},oldAttachmentObj,newState);
        var newEmail=Object.assign({},this.state.mail,{invoice:copyAttachmentsReplacingElement(this.state.invoice,newAttachmentObj) });
        var newState=Object.assign({},this.state,{mail:newEmail});
        this.setState(newState);
    }





    onRemoveUploadFile(e){

        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        var { id} = e.target;
        var idToRemove= id.replace('-rm','');
     //   this.updateSelectedAttachmentState(idToRemove,{file:{}, exists:false});

		/*
		 var oldAttachmentObj=this.findAttachmentStateById(id);
		 var newAttachmentObj=Object.assign({},oldAttachmentObj,{file:{}, exists:false});
		 var newState=Object.assign({},this.state,{attachments:copyArrayReplacingElement(this.state.attachments,newAttachmentObj) });
		 this.setState(newState);*/

    }

    onCostSelection(selected){
        let newState;
        if(selected){
            newState=Object.assign({},this.state,{selectedCostType:selected.label});
        }else{
            newState=Object.assign({},this.state,{selectedCostType:null});
        }
        this.setState(newState);
    }

	render() {

		const clearFixStyle={
			clear:'both'
		};
		/*
        const attachStyle={
            width:400,
            height:30
        }

        const divSelectStyle={
            width:830
        }
		 const mainStyle={display:"block"}

		 const invoiceDivStyle={
		 marginLeft:10
		 }

		 */

       // style={mainStyle}

        const txtStyle={
            height:30
        }


        const costTypeSelection={
            width:210
        }

		return (
			<div >
				<Panel title="NEW INVOICE" icon="list" width="1360">
					<div id="frmDivSpan12" className="span12 row-fluid">

						<div className="span5">
							<div className="widget widget-4 uniformjs">
								<div className="widget-head">
									<h4 className="heading">OFFICE DATA:</h4>
								</div>
								<div className="separator"></div>
								<div className="widget-body">
									<span>Approved By </span>
									<InputText name="ApprovedBy "  id="ApprovedBy" className="input-large mandatory" value="Approved By .."  />

									<span>Cost Type:</span>
									<VirtualizedSelect
										options={valuesToSelectDataArray(costTypes)}
										height={300}
										rowHeight={20}
										onChange={this.onCostSelection}
										value={this.state.selectedCostType}
										style={costTypeSelection}
									/>
									<br/>
									<div className="widget-head">
										<h5 className="heading">Legal Units:</h5>
									</div>
									<div className="separator"></div>
									<div>
										<label htmlFor="office">Office</label>
										<div>
											<input	type="text" id="office" value="Tallinn"  name="office" className="input-large mandatory" style={txtStyle} />
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>&nbsp;
											<input	type="text" id="officeRatio" value="100"  name="officeRatio" className="input-mini" style={txtStyle} />
											&nbsp;<span><strong>%</strong></span>
										</div>
									</div>

									<div>
										<label htmlFor="office2">Additional Office</label>
										<div>
											<input	type="text" id="office2" value="Gera"  name="office2" className="input-large mandatory" style={txtStyle} />
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>&nbsp;
											<input	type="text" id="officeRatio2" value="0"  name="officeRatio2" className="input-mini" style={txtStyle} />
											&nbsp;<span><strong>%</strong></span>
										</div>
									</div>

									<div className="widget-head">
										<h5 className="heading">Business Units:</h5>
									</div>
									<div className="separator"></div>
									<div>
										<label htmlFor="bunit1">Business Unit</label>
										<div>
											<input	type="text" id="bunit1" value="LiveOdds"  name="bunit1" className="input-large mandatory" style={txtStyle} />
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>
											<input	type="text" id="bunit1Ratio" value="100"  name="bunit1Ratio" className="input-mini" style={txtStyle} />
											&nbsp;<span><strong>%</strong></span>
										</div>
									</div>

									<div>
										<label htmlFor="bunit2">Addtional Business Unit</label>
										<div>
											<input	type="text" id="bunit2" value="Sales"  name="bunit2" className="input-large mandatory" style={txtStyle} />
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>
											<input	type="text" id="bunit2Ratio" value="0"  name="bunit2Ratio" className="input-mini" style={txtStyle} />
											&nbsp;<span><strong>%</strong></span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="span7" >
							<div className="widget widget-4 ">

								<div className="widget-head">
									<h4 className="heading">INVOICE DATA:</h4>
								</div>
								<div className="separator"></div>

								<div className="widget-body">
									<div className={styles.invoiceDivStyle}>
										<label htmlFor="invoiceNumber">Invoice Number</label>
										<input type="text" id="invoiceNumber" value=""  name="invoiceIssuer" className="input-medium mandatory" style={txtStyle} />
									</div>
									<div className={styles.invoiceDivStyle}>
										<label htmlFor="invoiceIssuer">Issuer</label>
										<input type="text" id="invoiceIssuer" value="Supplier name.."  name="invoiceIssuer" className="input-medium mandatory" style={txtStyle} />
									</div>
									<div>
										<label htmlFor="invoice" className={styles.invoiceDivStyle}>Invoice Date</label>
										<DatePicker id="from" className="dt-picker h30" dateFormat="YYYY/MM/DD"  onChange={this.updateFromDate} />
									</div>
									<div className={styles.invoiceDivStyle}>
										<label htmlFor="invoiceTotal">Total</label>
										<input type="text" id="invoiceTotal" value=""  name="invoiceTotal" className="input-medium mandatory" style={txtStyle} />
									</div>
									<div className={styles.invoiceDivStyle}>
										Upload Invoice
										<UploadInput cmpState={this.state.invoiceState} onRemoveUploadFile={this.onRemoveUploadFile} onFileSelected={this.onFileSelected} />
									</div>
								</div>

							</div>
						</div>

					</div>
				</Panel>
	</div>);
	}
}


function mapStateToProps (state,ownProps) {
	/*
	return {
		categoriesLoaded: StateSelectors.categories_isLoaded(state),
		authenticated: StateSelectors.auth_authenticated(state),
		role:StateSelectors.auth_role(state)
	};*/
	return {};
}

export default connect(mapStateToProps)(NewInvoicePage)
