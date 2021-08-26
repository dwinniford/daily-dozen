import {gql} from '@apollo/client'

const MEAL_PLAN_SHOW = gql`
    query MealPlanShow($id: ID!) {
        mealPlanShow(id: $id) {
            id
            title
            recipes {
                url
                label
                source
                image
                ingredientLines
            }
            tags {
                recipeUrl
                parent
                servings
                ingredient
            } 
        }
    }
`
export default MEAL_PLAN_SHOW