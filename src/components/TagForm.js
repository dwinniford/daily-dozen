import React from 'react'
import {LabelInputForm, FormInput, FormLabel, 
    DropDownContainer, SearchDropDown, AddButton, DropDownItem} from '../style/dashboard'
import {connect} from 'react-redux'

function TagForm(props) {
    
    
    const handleInputKeyUp = (event) => {
        console.log(event.target.value)
        props.searchTags(event.target.value)
    }

    return (
        <LabelInputForm>
            <FormLabel htmlFor="name">enter a tag</FormLabel>
            <DropDownContainer>
                <FormInput onKeyUp={(event) => handleInputKeyUp(event)} type="text" name="tag" ></FormInput>
                <SearchDropDown>
                    {props.tagSearchResults.map(t => <DropDownItem key={t}>{t} <AddButton>+</AddButton> </DropDownItem>)}
                </SearchDropDown>
            </DropDownContainer>
        </LabelInputForm> 
    )
}

const mapStateToProps = (state) => {
    return {
        tagSearchResults: state.builder.tagSearchResults
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchTags: (text) => dispatch({type: "SEARCH_TAGS", text})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagForm)
