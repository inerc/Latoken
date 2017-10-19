import {observable, computed, reaction, action} from 'mobx';

class ModalStore {
    @observable modal = {
        showModal: false,
        data: {
            value: '',
            key: ''
        }
    };

    close() {
        this.modal.showModal = false;
    }

    open(data) {
        if (data) {
            this.modal.data = data
        }
        this.modal.showModal = true;
    }


}

export default new ModalStore();