const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, {
                    id:
                }
            ]
        default:
            return state
    }
}

export default todos