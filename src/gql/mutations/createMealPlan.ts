import {gql} from '@apollo/client'

const CREATE_MEAL_PLAN = gql`
mutation CreateMealPlan(
    $title: String!, 
    $recipes: [RecipeInput!],
    $tags: [TagInput!]
    # $recipes: [{label: String, url: String, source: String, image: String, ingredientLines: [String]}], 
    # $tags: [parent: String, ingredient: String, recipeUrl: String, servings: Integer]
    ) {
    createMealPlan(input: {
        title: $title,
        recipes: $recipes,
        tags: $tags
    }) {
         mealPlan {
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
export default CREATE_MEAL_PLAN