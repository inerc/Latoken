import React from 'react';
import {Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import languageStore from '../store/languagesStore';
import labelsStore from '../store/labelsStore';

class ModalComponent extends React.Component {


    constructor() {
        super();
        this.state = {
            languageId: 'EN'
        };
    };

    getLanguagesOption() {
        return languageStore.languages.map(language => {
            return (
                <option key={language.id}>{language.name}</option>
            )
        })
    };

    handleAddLable = () => {
        labelsStore.addLabel(this.state)
    };

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter the data</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Unique key</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter unique key"
                            name="key"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select language</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select language"
                            name="languageId"
                            onChange={this.handleChange}
                        >
                            {this.getLanguagesOption()}
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Value</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="Enter value"
                            name="value"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleAddLable}>Add</Button>
                    <Button onClick={this.props.close}>Close</Button>
                </Modal.Footer>
            </Modal>

        )
    }
}

export default ModalComponent;