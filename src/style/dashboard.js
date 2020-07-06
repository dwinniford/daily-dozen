import styled from 'styled-components'

export const TypesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const TypeItem = styled.div`
    color: #ffffff;

    font-size: larger;
`

export const AddButton = styled.button`
    display: inline-block;
    border: none;
    padding: .3rem .5rem;
    margin: 0;
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