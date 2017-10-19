import {observable, computed, reaction, action} from 'mobx';
import 'isomorphic-fetch'

class LanguagesStore {
    @observable languages = [];

    fetchLanguages() {
        return fetch(`/language/`, {})
            .then((response) => {
                return response.json()
            })
            .then(result => {
                this.languages = result;
            })
            .catch(response => {
                return {error: response}
            });
    }

}

export default new LanguagesStore();