import React from 'react'
import HistoryTagForm from './HistoryTagForm'
import HistoryTagItem from './HistoryTagItem'

type RecipeTagsProps = {
    recipe: {url: string}, 
    tags: {recipeUrl: string, parent:string, ingredient: string, servings: number}[]
}

function HistoryRecipeTags(props: RecipeTagsProps) {
    // check if tags array exists
    const tags = () => {
        return props.tags.filter( t => t.recipeUrl === props.recipe.url )
    }
    return (
        <div>
            <HistoryTagForm recipeUrl={props.recipe.url}></HistoryTagForm>
            {tags().map(t => <HistoryTagItem tag={t} key={t.parent + "-" + t.ingredient}></HistoryTagItem>)}
        </div>
    )
}

export default HistoryRecipeTags