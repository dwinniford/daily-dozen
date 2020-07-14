const BACKEND_URL = 'http://localhost:3000'

export function search(ingredients) {
    return (dispatch) => {
        dispatch({type: "SEARCH_REQUEST"})
        return fetch(BACKEND_URL + `/search/recipe?q=${ingredients.join(" ")}`)
            .then(resp => resp.json())
            .then(json => {
                if (json.status === "error") {
                    dispatch({type: 'SEARCH_ERROR', message: json.message})
                } else {
                    dispatch({type: "SEARCH_SUCCESS", searchResults: json.hits})
                }
                
            })
    }
}