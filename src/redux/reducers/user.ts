const initialState = {name: "", loggedIn: false}

type ActionType = 
    | {type: "LOGIN"; name: string}


export default function user(state = initialState, action: ActionType) {
    switch(action.type) {
        case "LOGIN":
            return {...state, name: action.name, loggedIn: true}
        default: 
            return state
    }
}