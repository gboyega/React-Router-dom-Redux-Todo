const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, {
                    id: ,
                    text: ,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default todos