import React from 'react'
import { useQuery } from '@apollo/client'
import ME from '../gql/queries/me'

type MealPlanType = {title: string}
function History() {
    const {loading, error, data} = useQuery(ME)

    if(loading) return <h1>Loading Meal Plans</h1>
    if(error) {
        console.log(error)
        return <h1>Error retrieving meal plans</h1>
    }
    if(data) {
        return(
            <div>
                {data.me.mealPlans.map((m: MealPlanType) => <h2>{m.title}</h2>)}
            </div>
        )
    }
    return <h1>No Meal Plans</h1>
}

export default History