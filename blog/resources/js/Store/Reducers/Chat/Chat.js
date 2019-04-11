const initialState = {
    message: null,
    userId: null,
    error: null,
    loading: false,
}



export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}