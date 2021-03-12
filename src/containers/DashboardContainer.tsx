import React, { Component } from 'react'
// import {dailyDozenData} from '../data/dailyDozenData.js'
import Category from '../components/Category'
import { connect } from 'react-redux'
import Search from '../components/Search'
import {DashboardGrid, DashboardBlock } from "../style/dashboard.js"
import {Title} from '../style/base.js'

type DCProps = {categories: {name: string, types: string[], servings: {quantity: number, used: number}}[], addIngredient: Function }
class DashboardContainer extends Component<DCProps> {
    
    renderCategories = () => {
        return this.props.categories.map(cat => <Category addIngredient={this.props.addIngredient} key={cat.name} category={cat} />)
    }

    render() {
        return (
            <DashboardGrid>
                <DashboardBlock>
                    <Title>Meal Plan</Title>
                </DashboardBlock>
                <Search  />
                <DashboardBlock>
                    <Title>Daily Dozen</Title>
                    {this.renderCategories()}
                </DashboardBlock>
                
            </DashboardGrid>
        )
    }
}

type StateType = {builder: {categories: {name: string, types: string[], servings: {quantity: number, used: number}}[]}}
const mapStateToProps = (state: StateType) => {
    return {
        categories: state.builder.categories
    }
}

type DispatchType = Function
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addIngredient: (ingredient: string, parent: string) => dispatch({type: "ADD_INGREDIENT", ingredient, parent})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)