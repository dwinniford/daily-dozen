import React from 'react'
import {LabelInputForm, FormInput, FormLabel, 
    DropDownContainer, SearchDropDown, AddButton, DropDownItem} from '../style/dashboard'
import {WhitePlus} from '../style/icons'
import {connect} from 'react-redux'

type IngObj = {parent: string, ingredient: string}
type TagFormProps = {searchTags: Function, tagSearchResults: {parent: string, ingredient: string}[], recipeUrl: string, addTag: Function}

type FormEvent = {target: {value: string}, preventDefault: Function}

type StateProps = {builder: {tagSearchResults: {parent: string, ingredient: string}[] }}



function TagForm(props: TagFormProps ) {
    
    
    const handleInputKeyUp = (event: FormEvent) => {
        // console.log(event)
        props.searchTags(event.target.value)
    }

    const handleAddTag = (event: FormEvent, t: IngObj) => {
        event.preventDefault()
        console.log("add tag - ", t)
        props.addTag(props.recipeUrl, t)
    }

    return (
        <LabelInputForm>
            
            <DropDownContainer>
            <FormLabel >
                enter a tag
                <FormInput onKeyUp={(event: FormEvent) => handleInputKeyUp(event)} type="text" name="tag"  ></FormInput>
            </FormLabel>
                <SearchDropDown>
                    {props.tagSearchResults.map(t => <DropDownItem key={t.parent + "-" + t.ingredient } >{t.parent + "-" + t.ingredient} <AddButton onClick={(e: FormEvent) => handleAddTag(e, t)}><WhitePlus title={`add ${t.ingredient} to tags`} /></AddButton> </DropDownItem>)}
                </SearchDropDown>
            </DropDownContainer>
        </LabelInputForm> 
    )
}

const mapStateToProps = (state: StateProps) => {
    return {
        tagSearchResults: state.builder.tagSearchResults
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        searchTags: (text: string) => dispatch({type: "SEARCH_TAGS", text}),
        addTag: (url: string, tag: {parent: string, ingredient: string}) => dispatch({type: "ADD_TAG", url, tag})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagForm)
