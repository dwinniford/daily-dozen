import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Title = styled.h1`
    color: white;
` 

export const BackgroundOverlay = styled.div`
    grid-column: 2;
    background:  rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
`
export const NavGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;
`

export const BlackButtonLink = styled(Link)`
    display: inline-block;
    border: none;
    padding: 1rem 1rem;
    margin: 0;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    font-family: aleoLight;
    font-size: larger;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
`