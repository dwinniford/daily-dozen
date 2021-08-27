import {gql} from '@apollo/client'

const DELETE_MEAL_PLAN = gql`
mutation DeleteMealPlan($id: ID!) {
    deleteMealPlan(id: $id) {
        success
    }
}
`
export default DELETE_MEAL_PLAN