import {observable, computed, reaction, action} from 'mobx';
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
                        debugger
                        this.labels.push(result.result);
                        console.log(result.status);
                        break;
                    case 'update':
                        debugger
                        this.labels = this.labels.map((label) => {
                            debugger
                            if (label.id === result.result.id){
                                return result.result;
                            }else return label
                        });
debugger
                        this.labels
                        console.log(result.status);
                }
            })
            .catch(response => {
                return {error: response}
            });
    }
}

export default new TableStore();