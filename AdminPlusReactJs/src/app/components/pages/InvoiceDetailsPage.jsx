import React from 'react';
import { Link,hashHistory} from 'react-router';
import { connect } from 'react-redux'
import axios from 'axios';
import * as ApiUrls from '../../config/imt-config.js'
import Panel from '../panels/Panel.jsx'
import VirtualizedSelect from 'react-virtualized-select'
import UploadInput from '../widgets/UploadInput.jsx'
import {valuesToSelectDataArray,copyAttachmentsReplacingElement} from '../../utils/Commons.jsx';
import InputText from "../widgets/InputText.jsx";
import Button from '../widgets/Button.jsx'
import * as styles from '../../css/InvoiceDetailsPageStyle.js';

//import * as cssClasses from '../../css/InvoiceDetailsPageCls.css';
//import DatePicker from 'react-datepicker';

export class InvoiceDetailsPage extends React.Component {


    constructor(props) {
        super(props);
        this.state={
            selectedCostType:''
        }
    }


    render() {



        return (
			<div >
				<Panel title="INVOICE SEARCH" icon="list" width="1360">
					<span>Load by IMT ID:</span>
					<InputText name="ImtInvoiceId " id="ImtInvoiceId" className="input-small mandatory" value=""/>
				</Panel>
				<Panel title="INVOICE DETAILS" icon="list" width="1360">
					<div id="frmDivSpan12" className="span12 row-fluid">

						<div className="span5">
							<div className="widget widget-4 uniformjs">
								<div className="widget-head">
									<h4 className="heading">OFFICE DATA:</h4>
								</div>
								<div className="separator"></div>
								<div className="widget-body">
									<span>Approved By </span>
									<InputText name="ApprovedBy " id="ApprovedBy" className="input-large mandatory"
											   value="Approved By .."/>

									<span>Cost Type:</span>
									<InputText name="ApprovedBy " id="ApprovedBy" className="input-large mandatory"
											   value="CostType1"/>

									<div className="widget-head">
										<h5 className="heading">Legal Units:</h5>
									</div>
									<div className="separator"></div>
									<div>
										<label htmlFor="office">Office</label>
										<div>
											<input type="text" id="office" value="Tallinn" name="office"
												   className="input-large mandatory" style={styles.txtStyle}/>
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>
											<input type="text" id="officeRatio" value="100" name="officeRatio"
												   className="input-mini" style={styles.txtStyle}/><span>%</span>
										</div>
									</div>

									<div>
										<label htmlFor="office2">Additional Office</label>
										<div>
											<input type="text" id="office2" value="Gera" name="office2"
												   className="input-large mandatory" style={styles.txtStyle}/>
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>
											<input type="text" id="officeRatio2" value="0" name="officeRatio2"
												   className="input-mini" style={styles.txtStyle}/><span>%</span>
										</div>
									</div>

									<div className="widget-head">
										<h5 className="heading">Business Units:</h5>
									</div>
									<div className="separator"></div>
									<div>
										<label htmlFor="bunit1">Business Unit</label>
										<div>
											<input type="text" id="bunit1" value="LiveOdds" name="bunit1"
												   className="input-large mandatory" style={styles.txtStyle}/>
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>
											<input type="text" id="bunit1Ratio" value="100" name="bunit1Ratio"
												   className="input-mini" style={styles.txtStyle}/><span>%</span>
										</div>
									</div>

									<div>
										<label htmlFor="bunit2">Addtional Business Unit</label>
										<div>
											<input type="text" id="bunit2" value="Sales" name="bunit2"
												   className="input-large mandatory" style={styles.txtStyle}/>
											&nbsp;&nbsp;&nbsp;
											<span>Ratio</span>
											<input type="text" id="bunit2Ratio" value="0" name="bunit2Ratio"
												   className="input-mini" style={styles.txtStyle}/><span>%</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="span7">
								<div className="widget widget-4 ">

								<div className="widget-head">
									<h4 className="heading">INVOICE DATA:</h4>
								</div>
								<div className="separator"></div>

									<div className="widget-body">
										<div style={styles.invoiceDivStyle}>
											<label htmlFor="invoiceNumber">Invoice Number</label>
											<input type="text" id="invoiceNumber" value=""  name="invoiceIssuer" className="input-medium mandatory" style={styles.txtStyle} />
										</div>
										<div style={styles.invoiceDivStyle}>
											<label htmlFor="invoiceIssuer">Issuer</label>
											<input type="text" id="invoiceIssuer" value="Supplier name.."  name="invoiceIssuer" className="input-medium mandatory" style={styles.txtStyle} />
										</div>
										<div>
											<label htmlFor="invoice"style={styles.invoiceDivStyle}>Invoice Date</label>
											<DatePicker id="from" className="dt-picker h30" dateFormat="YYYY/MM/DD"  onChange={this.updateFromDate} />
										</div>
										<div style={styles.invoiceDivStyle}>
											<label htmlFor="invoiceTotal">Total</label>
											<input type="text" id="invoiceTotal" value=""  name="invoiceTotal" className="input-medium mandatory" style={styles.txtStyle} />
										</div>
									</div>
								</div>

								<div className="widget widget-4 ">

									<div className="widget-head">
										<h4 className="heading">UPDATE STATUS:</h4>
									</div>
									<div className="separator"></div>

									<div className="widget-body">
										<div style={styles.invoiceDivStyle}>
											<div className="pull-left" >
												<Button btnLabel="Archived" width="80" />
											</div>
											<div className="pull-left" >
												&nbsp;&nbsp;&nbsp;&nbsp;
											</div>
											<div className="pull-left" >
												<Button btnLabel="Processed" width="80" />
											</div>
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

export default connect(mapStateToProps)(InvoiceDetailsPage)
