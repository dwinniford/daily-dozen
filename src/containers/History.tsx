import React, {useState} from 'react'
import { useQuery } from '@apollo/client'
import ME from '../gql/queries/me'
import {Title, Subtitle, PositionTopRight, ExpandButton} from '../style/base'
import {DashboardGrid, DashboardBlock, SearchResultsGrid, CardHolder} from '../style/dashboard'
import { WhiteChevronRight } from '../style/icons'
import HistoryDetail from './HistoryDetail'

type MealPlanType = {title: string, id: string}
function History() {
    const {loading, error, data} = useQuery(ME)
    const [detailId, setDetailId] = useState<null | string>(null)
    const handleClick = (id: string) => {
        setDetailId(id)
    }

    if(loading) return <Title>Loading Meal Plans</Title>
    if(error) {
        console.log(error.graphQLErrors)
        return <Title>Error retrieving meal plans</Title>
    }
    if(data) {
        return(
            <DashboardGrid>
                <DashboardBlock>
                    <Title>History</Title>
                    <SearchResultsGrid>
                        {data.me.mealPlans.map((m: MealPlanType) => {
                             return (
                                <CardHolder key={m.id}>
                                    <Subtitle >{m.title}</Subtitle>
                                    <PositionTopRight>
                                        <ExpandButton onClick={() => handleClick(m.id)}>
                                            <WhiteChevronRight title="View Meal Plan" />
                                        </ExpandButton>
                                    </PositionTopRight>
                                </ CardHolder>)
                        })
                        }              
                    </SearchResultsGrid>
                    
                </DashboardBlock>
                {detailId ? <HistoryDetail id={detailId} /> : null}
            </DashboardGrid>
        )
    }
    return <Title>No Meal Plans</Title>
}

export default History