const initialState = {name: "", loggedIn: false}

type ActionType = 
    | {type: "LOGIN"; name: string}
    | {type: "LOGOUT"}


export default function user(state = initialState, action: ActionType) {
    switch(action.type) {
        case "LOGIN":
            return {...state, name: action.name, loggedIn: true}
        case "LOGOUT":
            return {...state, name: "", loggedIn: false}
        default: 
            return state
    }
}