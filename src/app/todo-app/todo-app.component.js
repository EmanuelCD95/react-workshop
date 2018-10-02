import React, { Component } from "react";
import { Route } from 'react-router-dom'; 

import TodoList from './shared/todo-list';
import TodoAdder from './shared/todo-adder';
import TodoView from './todo-view';

class ToDoApp extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h1>ToDo works!</h1>


                <div className="row">
                    <div className="col-6">
                        <TodoAdder />
                    </div>

                    <div className="col-6">
                        <TodoList />
                    </div>
                </div>
                
                <Route path="/todo/:id" component={TodoView}/>
            </div>
        );
    }
}

export default ToDoApp;