import React from 'react'
import { useQuery } from '@apollo/client'
import ME from '../gql/queries/me'
import {Title, Subtitle} from '../style/base'
import {DashboardGrid, DashboardBlock, SearchResultsGrid} from '../style/dashboard'

type MealPlanType = {title: string, id: string}
function History() {
    const {loading, error, data} = useQuery(ME)

    if(loading) return <Title>Loading Meal Plans</Title>
    if(error) {
        console.log(error)
        return <Title>Error retrieving meal plans</Title>
    }
    if(data) {
        return(
            <DashboardGrid>
                <DashboardBlock>
                    <Title>History</Title>
                    <SearchResultsGrid>
                        {data.me.mealPlans.map((m: MealPlanType) => <Subtitle key={m.id}>{m.title}</Subtitle>)}              
                    </SearchResultsGrid>
                  
                </DashboardBlock>
            </DashboardGrid>
        )
    }
    return <Title>No Meal Plans</Title>
}

export default History