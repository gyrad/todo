import React, { Fragment } from 'react';

const TodoList = ({ items, remove, toggleCompleted }) => {

    let renderedList = <div className="content">
        <ul style={{ listStyle: 'none' }}>
            {items.map((item, index) => (
                    <li key={index}>
                        <label>
                            <input type="checkbox" checked={item.completed} onChange={() => toggleCompleted(item.id, item.todo)} /> &nbsp;
                        <span
                                className="is-size-5"
                                style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                            >
                                {item.todo}
                            </span>
                        </label>
                        <button
                            className="button is-danger is-small is-rounded is-outlined"
                            style={{ marginLeft: '.5rem' }}
                            onClick={() => remove(item.id)}
                        >
                            Delete &times;
                    </button>
                    </li>
                )
            )}
        </ul>
    </div>;

    if (items.length === 0) {
        renderedList = <div className="section">Your todo list is empty.</div>
    }

    return (
        <Fragment>
            {renderedList}
        </Fragment>
    );
}

export default TodoList;