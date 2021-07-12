import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./task/Form"
import List from "./task/List"
import Edit from "./task/Edit"

function Task() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">*Example Component*</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;

if (document.getElementById('task-edit')) {
    ReactDOM.render(<Task />, document.getElementById('task-edit'));
}
