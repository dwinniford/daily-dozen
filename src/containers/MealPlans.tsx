import React from 'react'
import { useQuery } from '@apollo/client'
import MEAL_PLANS from '../gql/queries/mealPlans'

function MealPlans() {
    const {loading, error, data} = useQuery(MEAL_PLANS)

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error :(</p>


    return (
        <div>
            {data.mealPlansAll.map((item: {title: string}) => (
                <h2>{item.title}</h2>
            ))}
        </div>
    )
}

export default MealPlans