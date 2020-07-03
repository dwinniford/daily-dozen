import React, { Component } from 'react'
// import {dailyDozenData} from '../data/dailyDozenData.js'
import Category from '../components/Category.js'
import { connect } from 'react-redux'
import Search from '../components/Search.js'

class DashboardContainer extends Component {
    
    renderCategories = () => {
        return this.props.categories.map(cat => <Category addIngredient={this.props.addIngredient} key={cat.name} category={cat} />)
    }

    render() {
        return (
            <div>
                <Search />
                {this.renderCategories()}
            </div>
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
        addIngredient: (ingredient) => dispatch({type: "ADD_INGREDIENT", ingredient})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)