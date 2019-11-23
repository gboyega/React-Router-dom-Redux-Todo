import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {

    return (
        <div>
            <form on>
                <input />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}