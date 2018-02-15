
import React from 'react'
import Button from './widgets/Button.jsx'
import {Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter} from 'react-modal-bootstrap';


export default class ModalWindow extends React.Component{


	constructor(props) {
		super(props);
	}

	render() {

		const backdropStyles = {
			  base: {
			    background: 'rgba(0, 0, 0, .7)',
			    opacity: 0,
			    visibility: 'hidden',
			    transition: 'all 0.4s',
			    overflowX: 'hidden',
			    overflowY: 'auto'
			  },
			  open: {
			    opacity: 3,
			    visibility: 'visible'
			  }
		};
 
		const dialogStyles = {
		  base: {
		    top: -600,
		    transition: 'top 0.4s'
		  },
		  open: {
		    top: 200,
		    left: 200,
		    position:'absolute',
		    width:400,
		    height:280,
		    backgroundColor: '#f5f5f5',
		       
		  }
		}
		const alertMsgStyle={
			fontSize:16 
		}

		return (

			<Modal isOpen={this.props.isOpened} onRequestHide={this.props.hideModal} size="modal-sm"
				backdropStyles={backdropStyles} dialogStyles={dialogStyles}	>
				  <ModalHeader>
				    <ModalClose onClick={this.hideModal}/>
				    <ModalTitle>GROUP UPDATES</ModalTitle>
				  </ModalHeader>
				  <ModalBody>
				    <p style={alertMsgStyle}>Group with id <strong> {this.props.currentId} </strong></p>
				    <p style={alertMsgStyle}>will replace its current name: <strong> {this.props.currentName} </strong> </p>
					<p style={alertMsgStyle}>with New Name: <strong> {this.props.newName} </strong> </p>
				    <p style={alertMsgStyle}> Press <strong>OK</strong> to confirm,  </p>
				    <p style={alertMsgStyle}> or <strong>Cancel</strong> to cancel </p>						
				  </ModalBody>
				  <ModalFooter>					  
				    <button className='btn btn-primary' onClick={this.props.confirmSave}>
				      OK
				    </button>
				    <button className='btn btn-default' onClick={this.props.cancelSave}>
				      Cancel
				    </button>
				  </ModalFooter>
			</Modal>

		)

	}

}