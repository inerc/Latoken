import React from 'react';
import {Table, Button} from 'react-bootstrap';
import labelStore from '../store/labelsStore';
import languageStore from '../store/languagesStore';
import {observer} from 'mobx-react';
import Modal from './Modal';
import modalStore from '../store/modalStore';

@observer
class TableComponent extends React.Component {

    componentWillMount() {
        labelStore.fetchLabels();
        languageStore.fetchLanguages();
    }

    sortRow() {
        let arrayLabels = [];
        let mainLanguage = languageStore.languages.find((language) => {
            return language.isMainLanguage === true;
        });

        if (mainLanguage) {
            let mainLabels = labelStore.labels.filter((label) => {
                return label.languageId === mainLanguage.name
            });

            labelStore.labels.forEach((label) => {
                let find = false;
                mainLabels.forEach(main => {
                    if (label.key === main.key && label.editTimestamp > main.editTimestamp) {
                        label.isNew = true;
                        arrayLabels.unshift(label);
                        find = true;
                    } else if (label.key === main.key && label.editTimestamp <= main.editTimestamp) {
                        arrayLabels.push(label);
                        find = true
                    }
                });
                if (!find) {
                    label.isNew = false;
                    arrayLabels.push(label);
                }
            })
        }
        return arrayLabels;

    }


    getTableBody() {

        let labels = this.sortRow();
        return labels.map(label => {
            return (
                <tr style={label.isNew ? {background: 'red'} : {}} key={label.id}>
                    <td>{label.id}</td>
                    <td>{label.key}</td>
                    <td>{label.languageId}</td>
                    <td>{label.value}</td>
                    <td>{label.editTimestamp}</td>
                    <td><Button onClick={() => modalStore.open(label)} bsStyle="info">Edit</Button></td>
                </tr>
            )
        });
    }


    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>key</th>
                        <th>languageId</th>
                        <th>value</th>
                        <th>time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getTableBody()}
                    </tbody>
                </Table>
                <Modal/>
            </div>

        )
    }
}

export default TableComponent;