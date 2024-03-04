import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import DataProvider from './context/DataProvider';



ReactDOM.render(
<DataProvider>
    <App/>
</DataProvider>
,document.getElementById('root'))