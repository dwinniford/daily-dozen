import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Title = styled.h1`
    color: white;
` 
export const Subtitle = styled.h3`
    color: white;
    font-weight: 600;
    margin-right: 6rem;
`

export const BackgroundOverlay = styled.div`
    grid-column: 1;
    background:  rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
`
export const NavGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
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

export const BlackButton = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem 1rem;
    margin: 0;
    text-decoration: none;
    background: #23272b;
    color: #ffffff;
    font-family: aleoLight;
    font-size: larger;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: .25rem;
    :hover {
        background: #000;
    }
    :focus {
        outline: none;
    }
`
export const ExpandButton = styled(BlackButton)`
    background: transparent;
    border: 0;
    outline: none;
`
export const PositionTopRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

export const ExternalLinkButton = styled.a`
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

export const ExternalLink = styled.a`
    color: #ffffff;
    padding-bottom: .5rem;
    margin-bottom: .5rem;
    font-size: 1rem;
    font-family: aleoLight;
    line-height: 1.25;
    display: block;
`

export const MessageHolder = styled.p`
    color: #fff;
    transition: opacity .5s ease;
    opacity: ${(props) => parseInt(props.opacity)};
`