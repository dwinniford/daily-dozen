import {gql} from '@apollo/client'

const UPDATE_MEAL_PLAN = gql`
mutation UpdateMealPlan($id: ID!, $title: String! ) {
    updateMealPlan(id: $id, title: $title) {
        mealPlan {
            id
            title
            recipes {
                label
                url
                id
            }
            tags {
                recipeUrl
                parent
                ingredient
                servings
                id
            }
        }
    }
}
`

export default UPDATE_MEAL_PLAN