import React, { Component } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {

    state = {
        todoItems: [],
        serialNum: 0,
        visibility: 'all'
    };

    addTodoItem = (todo) => {
        const newList = [...this.state.todoItems, { id: this.state.serialNum + 1, todo: todo, completed: false }];
        this.setState(prevState => ({
            todoItems: newList,
            serialNum: prevState.serialNum + 1
        }));
    };

    removeTodoItem = id => {
        const newList = [...this.state.todoItems].filter(item => item.id !== id);

        this.setState({
            todoItems: newList
        });
    };

    toggleCompleted = id => {
        this.setState({
            todoItems: this.state.todoItems.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    };

    setVisibility = visibility => {
        this.setState({
            visibility
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title">Todo List</h1>
                    <TodoInput addTodoItem={this.addTodoItem} />
                    <TodoList
                        items={this.state.todoItems}
                        remove={this.removeTodoItem}
                        toggleCompleted={this.toggleCompleted}
                        setVisibility={this.setVisibility}
                        visibility={this.state.visibility}
                    />
                </div>
            </div>
        );
    }
}

export default App;