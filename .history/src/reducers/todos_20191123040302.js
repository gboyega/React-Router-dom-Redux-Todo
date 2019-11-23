const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id ,
                    text: action.tex ,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default todos