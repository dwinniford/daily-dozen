import {gql} from '@apollo/client'

const MEAL_PLANS = gql`
  query {
    mealPlansAll {
      title 
      id
    }
  }
`
export default MEAL_PLANS