import React, { Component } from 'react'
import {dailyDozenData} from '../data/dailyDozenData.js'
import Category from '../components/Category.js'

export default class DashboardContainer extends Component {
    
    renderCategories = () => {
        return dailyDozenData.map(cat => <Category key={cat.name} category={cat} />)
    }

    render() {
        return (
            <div>
                {this.renderCategories()}
            </div>
        )
    }
}
