import React from 'react';
import {Table} from 'react-bootstrap';
import labelStore from '../store/labelsStore';
import languageStore from '../store/languagesStore';
import {observer} from 'mobx-react';


@observer
class TableComponent extends React.Component {


    componentWillMount() {
        labelStore.fetchLabels();
        languageStore.fetchLanguages();
    }

    getLanguagesOption() {
        return languageStore.languages.map(language => {
            return (
                <option key={language.id}>{language.name}</option>
            )
        })
    }


    getTableBody() {
        return labelStore.labels.map(label => {
            return (
                <tr key={label.id}>
                    <td>{label.id}</td>
                    <td><input value={label.key}/></td>
                    <td>
                        <select>
                            {this.getLanguagesOption()}
                        </select>
                    </td>
                    <td><input value={label.value}/></td>
                    <td>{label.editTimestamp}</td>
                </tr>
            )
        });
    }


    render() {
        return (
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

        )
    }
}

export default TableComponent;