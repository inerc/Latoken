import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from './Modal';
import modalStore from '../store/modalStore';

class Footer extends React.Component {



    render() {
        return (
            <div>
                <Button onClick={() => modalStore.open()} bsStyle="info" >Add row</Button>
                <Modal/>
            </div>

        )
    }
}

export default Footer;