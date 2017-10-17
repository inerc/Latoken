import {observable, computed, reaction, action} from 'mobx';
import 'isomorphic-fetch'

class TableStore {
    @observable labels = [];

    getLabels() {
        return fetch(`/label/`, {})
            .then((response) => {
                console.log('Response')
                console.log(response)
                response.forEach((item) => {
                    this.labels.push(item);
                })
                // if (response.status !== 200) {
                //     throw new Error('error!');
                // }
                //
                // return response.json();
            })
            .catch(response => {
                return {error: response}
            });
    }

    toJS() {
        debugger
        return this.labels.map(label => label.toJS());
    }

    static fromJS(array) {
        const labelStore = new LabelStore();
        labelStore.labels = array.map(label => TodoModel.fromJS(todoStore, item));
        return todoStore;
    }


    constructor() {
        this.show = false;
    }

}

export default new TableStore();