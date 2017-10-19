import {observable, computed, reaction, action} from 'mobx';
import modalStore from '../store/modalStore';
import 'isomorphic-fetch'

class TableStore {
    @observable labels = [];

    fetchLabels() {
        return fetch(`/label/`, {})
            .then((response) => {
                return response.json()
            })
            .then(result => {
                this.labels = result;
            })
            .catch(response => {
                return {error: response}
            });
    }

    addLabel(data) {
        return fetch(`/label/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                switch (result.status) {
                    case 'insert':
                        this.labels.push(result.data);
                        break;
                    case 'update':
                        this.labels = this.labels.map((label) => {
                            if (label.id === result.data.id) {
                                return result.data;
                            } else {
                                return label;
                            }
                        });
                        break;
                }
                modalStore.close();
            })
            .catch(response => {
                return {error: response}
            });
    }
}

export default new TableStore();