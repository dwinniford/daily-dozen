import React, {useState} from 'react'
import {LabelInputForm, FormInput, FormLabel} from '../style/dashboard'
import {connect} from 'react-redux'

function TagForm(props) {
    const [tagSearchResults, setTagSearchResults] = useState([])
    
    const handleInputKeyUp = (event) => {
        console.log(event.target.value)
        // setTagSearchResults([...tagSearchResults, event.target.value])
        props.searchTags(event.target.value)
    }

    return (
        <LabelInputForm>
            <FormLabel for="name">enter a tag</FormLabel>
            <FormInput onKeyUp={(event) => handleInputKeyUp(event)} type="text" name="tag" ></FormInput>
            <ul>
                {props.tagSearchResults.map(t => <li>{t}</li>)}
            </ul>
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
