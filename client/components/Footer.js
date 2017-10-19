import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from './Modal';

class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.open()} bsStyle="primary" bsSize="large">Add row</Button>
                <Modal showModal={this.state.showModal} close={() => this.close()} open={() => this.open()}/>
            </div>

        )
    }
}

export default Footer;