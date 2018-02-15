import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default function LicenseCostsTablePanel (props)  {


    const tableDiv={
        display:"block",
        marginLeft:70,
        width:1200,
        height:'85%'
    };

    const mainStyle=(props.active)? tableDiv : {display:"none"}


    return (
		<div style={mainStyle}>
			<BootstrapTable data={props.data} striped={true} hover={true} pagination={true}	search={true}>
				<TableHeaderColumn className="primary-background" isKey={true} hidden={true} dataField="id">
					ID</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="120"  dataField="product" dataSort={true} >

				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="120" dataField="vendor" dataSort={true} >
					VENDOR
				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="50" dataField="monthlyFee" dataSort={true} >
					M-PRICE
				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="50" dataField="yearlyFee" dataSort={true} >
					Y-PRICE
				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="80" dataField="renewal" dataSort={true} >
					RENEWAL
				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="80" dataField="renewalDate" dataSort={true} >
					RENEWAL DATE
				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="60" dataField="count" dataSort={true} >
					LICENSES
				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="60" dataField="costs" dataSort={true} >
					TOTAL COSTS
				</TableHeaderColumn>
				<TableHeaderColumn className="primary-background" width="50" dataField="id" dataFormat={props.formatLicenseDetailButtonCell} >
					&nbsp;&nbsp;&nbsp;
				</TableHeaderColumn>
			</BootstrapTable>
		</div>


    );

}