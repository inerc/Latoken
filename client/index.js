import Table from './components/appTable';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoStore from './store/TableStore';

const initialState = window.initialState && JSON.parse(window.initialState) || {};

var tableStore = TodoStore.fromJS(initialState.labels || []);

const app = document.getElementById("app");

ReactDOM.render(<Table tableStore={tableStore} />, app);

