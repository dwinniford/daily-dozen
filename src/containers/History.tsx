import React from 'react'
import { useQuery } from '@apollo/client'
import ME from '../gql/queries/me'
import {Title} from '../style/base'

type MealPlanType = {title: string, id: string}
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
                {data.me.mealPlans.map((m: MealPlanType) => <Title key={m.id}>{m.title}</Title>)}
            </div>
        )
    }
    return <h1>No Meal Plans</h1>
}

export default History