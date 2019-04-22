import React, { Fragment } from 'react';

const TodoList = ({ items, remove, toggleCompleted, setVisibility, visibility }) => {

    const btnStyle = {margin: '1rem .5rem 0 0'};

    let renderedList = (
        <div className="content">
            <button 
                className={`button is-small is-light ${(visibility === 'all') ? 'is-info' : ''}`} 
                style={btnStyle}
                onClick={() => setVisibility('all')}
            >
                All
            </button>
            <button 
                className={`button is-small is-light ${(visibility === 'active') ? 'is-info' : ''}`} 
                style={btnStyle}
                onClick={() => setVisibility('active')}
            >
                Active
            </button>
            <button 
                className={`button is-small is-light ${(visibility === 'completed') ? 'is-info' : ''}`} 
                style={btnStyle}
                onClick={() => setVisibility('completed')}
            >
                Completed
            </button>

            <ul style={{ listStyle: 'none' }}>
                {items.filter(item => {
                    if (visibility === 'active') {
                        return !item.completed
                    } else if (visibility === 'completed') {
                        return item.completed
                    }
                    return item;
                }).map((item, index) => (
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
        </div>
    );

    if (items.length === 0) {
        renderedList = <div className="section">Your todo list is empty.</div>
    }


    console.log(items);
    return (
        <Fragment>
            {renderedList}
        </Fragment>
    );
}

export default TodoList;