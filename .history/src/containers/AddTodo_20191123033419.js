import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit = {}>
                <input ref={node } />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}