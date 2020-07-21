import React, {useState} from 'react'
import {LabelInputForm, FormInput, FormLabel} from '../style/dashboard'
import {connect} from 'react-redux'

function TagForm(props) {
    const [tagSearchResults, setTagSearchResults] = useState([])
    
    const handleInputKeyUp = (event) => {
        console.log(event.target.value)
        setTagSearchResults([...tagSearchResults, event.target.value])
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
export default connect(mapStateToProps)(TagForm)
