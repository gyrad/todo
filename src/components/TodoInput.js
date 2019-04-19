import React, { Component } from 'react';

class TodoInput extends Component {
    state = {
        todo: ''
    };

    inputRef = React.createRef();

    submitHandler = e => {
        e.preventDefault();
        this.props.addTodoItem(this.state.todo);
        this.setState({ todo: '' });
    }

    componentDidUpdate() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="control">
                    <input 
                        type="text" 
                        className="input"
                        value={this.state.todo} 
                        onChange={e => this.setState({todo: e.target.value})} 
                        ref={this.inputRef}
                        placeholder="Add todo item..."
                    />
                </div>
            </form>
        );
    }
}

export default TodoInput;