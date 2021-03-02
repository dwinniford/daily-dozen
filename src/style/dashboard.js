import styled from 'styled-components'

export const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media(min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const DashboardBlock = styled.div`
    padding: 1rem;
    border: 2px solid;
    margin: .5rem;
`

export const TypesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: left;
    grid-gap: .5rem;
    margin-top: 1rem;
`

export const ListItem = styled.div`
    color: #ffffff;
    font-size: larger;
`

export const AddButton = styled.button`
    display: inline-block;
    border: none;
    padding: .3rem .5rem;
    margin: 0;
    margin-left: .5rem;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: #ffffff;
    font-family: aleoLight;
    font-size: larger;
    font-weight: bold;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
`
export const EmptyCounter = styled.button`
    display: inline-block;
    border: none;
    padding: .3rem .5rem;
    margin: 0;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
`
export const FullCounter = styled.button`
    display: inline-block;
    border: none;
    padding: .3rem .5rem;
    margin: 0;
    text-decoration: none;
    background: rgba(0, 230, 64, .7);
    border-radius: 5px;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
`

export const CategoryHead = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 5px;
`

export const SearchResultsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .5rem;
    margin-top: .5rem;
    text-align: left;
`

export const LabelInputForm = styled.form`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    color: white;
    font-size: larger;
    
`

export const FormInput = styled.input`
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    /* font-size: larger */
`

export const FormLabel = styled.label`
    /* font-size: larger; */
    align-self: center;
`

export const DropDownContainer = styled.div`
    position: relative;
`

export const SearchDropDown = styled.ul`
    position: absolute;
    background: white;
    color: black;
    width: 100%;
    text-align: right;
`
export const DropDownItem = styled.li`
    list-style-type: none;
`
export const CardHolder = styled.div`
    position: relative;
`
export const CollapseHolder = styled.div`
    height: ${props => props.expand ? props.height+"px"  : "0"};
    opacity: ${props => props.expand ? "1" : "0"};
    transition: height 1s ease; 
    overflow: hidden;
    /* visibility: ${props => props.expand ? "visible" : "hidden"} */
`
export const CollapseInner = styled.div`
    height: auto;
`
export const RecipeImg = styled.img`
    height: 300px;
`