const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, {
                    id: ,
                    text: ,
                    completed: f
                }
            ]
        default:
            return state
    }
}

export default todos