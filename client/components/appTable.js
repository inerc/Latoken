import React from 'react';
import { Table, FieldGroup } from 'react-bootstrap';
import {observer} from 'mobx-react';
import { action } from 'mobx';
import TableStore from '../store/TableStore';

@observer
class appTable extends React.Component {


    componentWillMount() {
        TableStore.getLabels();
    }


    getTableBody() {
        return (
            <tbody>
                <tr>
                    <td>1</td>
                    <td><input /></td>
                    <td>
                        <select defaultValue={'EN'}>
                            <option selected >EN</option>
                            <option>RU</option>
                            <option>IT</option>
                        </select>
                    </td>
                    <td> <input /> </td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        )
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
                    {this.getTableBody()}
                </Table>
        )
    }
}

export default appTable;