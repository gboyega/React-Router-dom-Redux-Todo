import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit = {e => {
                e.preventDefault();
                if(input.)
                }
            }>
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}