import React from 'react'
import {LabelInputForm, FormInput, FormLabel, 
    DropDownContainer, SearchDropDown, AddButton, DropDownItem} from '../style/dashboard'
import {WhitePlus} from '../style/icons'
import {connect} from 'react-redux'


type TagFormProps = {searchTags: Function, tagSearchResults: string[]}

type FormEvent = {target: {value: string}, preventDefault: Function}

type StateProps = {builder: {tagSearchResults: string[] }}



function TagForm(props: TagFormProps ) {
    
    
    const handleInputKeyUp = (event: FormEvent) => {
        console.log(event.target.value)
        props.searchTags(event.target.value)
    }

    const handleAddTag = (event: FormEvent, t: string) => {
        event.preventDefault()
        console.log("add tag - ", t)
    }

    return (
        <LabelInputForm>
            <FormLabel htmlFor="name">enter a tag</FormLabel>
            <DropDownContainer>
                <FormInput onKeyUp={(event: FormEvent) => handleInputKeyUp(event)} type="text" name="tag" ></FormInput>
                <SearchDropDown>
                    {props.tagSearchResults.map(t => <DropDownItem key={t}>{t} <AddButton onClick={(e: FormEvent) => handleAddTag(e, t)}><WhitePlus title={`add ${t} to tags`} /></AddButton> </DropDownItem>)}
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
        searchTags: (text: string) => dispatch({type: "SEARCH_TAGS", text})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagForm)
