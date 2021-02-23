import React, { Component } from 'react'
// import {dailyDozenData} from '../data/dailyDozenData.js'
import Category from '../components/Category.js'
import { connect } from 'react-redux'
import Search from '../components/Search.js'
import {DashboardGrid, DashboardBlock } from "../style/dashboard.js"
import {Title} from '../style/base.js'

class DashboardContainer extends Component {
    
    renderCategories = () => {
        return this.props.categories.map(cat => <Category addIngredient={this.props.addIngredient} key={cat.name} category={cat} />)
    }

    render() {
        return (
            <DashboardGrid>
                <DashboardBlock>
                    <Title>Meal Plan</Title>
                </DashboardBlock>
                <Search removeIngredient={this.props.removeIngredient} />
                <DashboardBlock>
                    <Title>Daily Dozen</Title>
                    {this.renderCategories()}
                </DashboardBlock>
                
            </DashboardGrid>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.builder.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredient) => dispatch({type: "ADD_INGREDIENT", ingredient}),
        removeIngredient: (ingredient) => dispatch({type: "REMOVE_INGREDIENT", ingredient})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)