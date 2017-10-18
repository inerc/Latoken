import React from 'react';
import { Table, FieldGroup, ButtonToolbar, Button } from 'react-bootstrap';
import {observer} from 'mobx-react';
import { action } from 'mobx';
import TableStore from '../store/TableStore';
import DevTools from 'mobx-react-devtools';

@observer
class appTable extends React.Component {


    componentWillMount() {
        TableStore.getLabels();
    }


    getTableBody() {
     return   TableStore.labels.map(label => {
            return (
                <tr>
                    <td>{label.id}</td>
                    <td><input value={label.key} /></td>
                    <td>
                        <select defaultValue={label.languageId}>
                            <option selected >EN</option>
                            <option>RU</option>
                            <option>IT</option>
                        </select>
                    </td>
                    <td> <input  value={label.value}/> </td>
                    <td>{label.editTimestamp}</td>
                </tr>
            )
        });
    }


    render() {
        return (
            <div>
                <DevTools />
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

                {/*<Button onClick={TableStore.labels.push({})} bsStyle="primary" bsSize="large">Add row</Button>*/}

            </div>

        )
    }
}

export default appTable;