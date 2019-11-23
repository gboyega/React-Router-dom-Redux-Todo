const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, {
                    id: ,
                    text: ,
                    
                }
            ]
        default:
            return state
    }
}

export default todos