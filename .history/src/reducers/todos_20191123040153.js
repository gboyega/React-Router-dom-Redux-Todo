const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...stat
            ]
        default:
            return state
    }
}

export default todos