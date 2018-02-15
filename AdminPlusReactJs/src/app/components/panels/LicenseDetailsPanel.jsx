import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Button from '../widgets/Button.jsx'

export default function LicenseDetailsPanel (props)  {

	console.log(props.data);

    const panelDiv={
        display:"block",
        marginLeft:0,
        width:1360,
        height:'85%'
    };

    const tableDiv={
        display:"block",
        marginLeft:100,
        width:500,
        height:'75%'
    };

    const fltBarStyle={
    	height:120,
        width:1250,
        marginLeft:0
    };

    const mainStyle=(props.active)? panelDiv : {display:"none"}

    let countByLocations=(props.data.countByLocations)? props.data.countByLocations : [];
    let countByBusinessUnit=(props.data.countByBusinessUnit)? props.data.countByBusinessUnit : [];
    let costsByLocations=(props.data.costsByLocations)? props.data.costsByLocations : [];
    let costsByBusinessUnit=(props.data.costsByBusinessUnit)? props.data.costsByBusinessUnit : [];

    return (
		<div  style={mainStyle}>
			<div className="filter-bar filter-bar-2" style={fltBarStyle}>
				<div className=""><i></i>License Details</div>
				<div>
					<div className="inline">
						<label>Id</label>
						<input type="text" id="id" className="input-small h30" value={props.data.id} readOnly={true} />
					</div>

					<div className="inline">
						<label>Product</label>
						<input type="text" id="product" className="input-medium h30" value={props.data.product} readOnly={true} />
					</div>
					<div className="inline">
						<label>Vendor</label>
						<input type="text" id="vendor" className="input-medium h30" value={props.data.vendor}  readOnly={true} />
					</div>
					<div className="inline">
						<label>monthlyFee</label>
						<input type="text" id="monthlyFee" className="input-medium h30" value={props.data.monthlyFee}   readOnly={true} />
					</div>
					<div className="inline">
						<label>yearlyFee</label>
						<input type="text" id="yearlyFee" className="input-medium h30" value={props.data.yearlyFee} readOnly={true} />
					</div>
					<div className="inline">
						<label>renewal</label>
						<input type="text" id="renewal" className="input-medium h30" value={props.data.renewal} readOnly={true} />
					</div>
					<div className="inline">
						<label>renewalDate</label>
						<input type="text" id="renewalDate" className="input-medium h30" value={props.data.renewalDate} readOnly={true} />
					</div>
					<div className="inline">
						<label>&nbsp;</label>
						<Button onClick={props.backButtonHandler} btnLabel="Back" />
					</div>
				</div>
			</div>

			<div className="separator"></div>
			<div className="row-fluid">
				<div className="span10">
					<Tabs>
						<TabList>
							<Tab>Licenses By Location</Tab>
							<Tab>Licenses By Business Unit</Tab>
							<Tab>Costs By Location</Tab>
							<Tab>Costs By Business Unit</Tab>
						</TabList>

						<TabPanel>
							<h2>Licenses By Location</h2>
							<div style={tableDiv}>
								<BootstrapTable data={countByLocations} striped={true} hover={true} pagination={true} search={true}>
									<TableHeaderColumn className="primary-background" isKey={true} hidden={true} dataField="id">
										ID
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120"  dataField="location" dataSort={true} >
										LOCATION
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120" dataField="licenseCount" dataSort={true} >
										LICENSES
									</TableHeaderColumn>
								</BootstrapTable>
							</div>
							<br/>
						</TabPanel>

						<TabPanel>
							<h2>Licenses By Business Unit</h2>
							<div style={tableDiv}>
								<BootstrapTable data={countByBusinessUnit} striped={true} hover={true} pagination={true} search={true}>
									<TableHeaderColumn className="primary-background" isKey={true} hidden={true} dataField="id">
										ID
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120"  dataField="businessUnit" dataSort={true} >
										BUSINESS UNIT
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120" dataField="licenseCount" dataSort={true} >
										LICENSES
									</TableHeaderColumn>
								</BootstrapTable>
							</div>
							<br/>
						</TabPanel>

						<TabPanel>
							<h2>Costs By Location</h2>
							<div style={tableDiv}>
								<BootstrapTable data={costsByLocations} striped={true} hover={true} pagination={true} search={true}>
									<TableHeaderColumn className="primary-background" isKey={true} hidden={true} dataField="id">
										ID
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120"  dataField="location" dataSort={true} >
										LOCATION
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120" dataField="licenseCost" dataSort={true} >
										LICENSES
									</TableHeaderColumn>
								</BootstrapTable>
							</div>
							<br/>
						</TabPanel>

						<TabPanel>
							<h2>Costs By Business Unit</h2>
							<div style={tableDiv}>
								<BootstrapTable data={costsByBusinessUnit} striped={true} hover={true} pagination={true} search={true}>
									<TableHeaderColumn className="primary-background" isKey={true} hidden={true} dataField="id">
										ID
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120"  dataField="businessUnit" dataSort={true} >
										BUSINESS UNIT
									</TableHeaderColumn>
									<TableHeaderColumn className="primary-background" width="120" dataField="licenseCost" dataSort={true} >
										LICENSES
									</TableHeaderColumn>
								</BootstrapTable>
							</div>
							<br/>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</div>



    );

}