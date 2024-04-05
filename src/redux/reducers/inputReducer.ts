interface Action {
    type:string,
    payload:string
}

interface ReduxState {
    make:string,
    model:string
}

const initialState:ReduxState = {
    make:'bmw',
    model:''
}

const inputReducer = (state = initialState, action:Action) => {
    
    switch(action.type) {
        case "SET_MODEL":
            return {...state, model: action.payload};
        case "SET_MAKE":
            return {...state, make: action.payload};
        default:
            return state;
    }
}

export default inputReducer;