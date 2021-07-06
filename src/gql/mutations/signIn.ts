import {gql} from '@apollo/client'

const SIGN_IN = gql`
mutation SignIn($name: String!, $password: String!) {
    signIn(input: {name: $name, password: $password}) {
        token
        user {
            name
            id
        }
    }
}
`

export default SIGN_IN