import {gql} from "@apollo/client";

const SIGN_UP = gql`
    mutation SignUp($name: String!, $password: String!) {
        signUp(input: { name: $name, password: $password }) {
            token
            user {
                name
                id
            }
        }
    }
`

export default SIGN_UP