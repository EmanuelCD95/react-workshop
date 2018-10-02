import React, { Component } from "react";
import TodoList from './todo-list';
import TodoAdder from './todo-adder';

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

            </div>
        );
    }
}

export default ToDoApp;