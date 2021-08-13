import {gql} from '@apollo/client'

const ME = gql`
    query {
        me {
            name 
            id 
            mealPlans {
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
    }
`

export default ME