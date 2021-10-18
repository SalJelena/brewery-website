import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinkRight = styled(Link)`
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: 4rem;
    transition: .2s transform ease-in-out
    will-change transform;
    
    &:link,
    &:visited {
        font-size: 1.2rem;
        font-weight: 400;
        text-decoration: none;
        display: block;
        padding: 0.8rem 2.5rem;
        border-radius: 3rem;
        background-color: #FFD700;
        color: #222;

    }
    &:hover,
    &:active {
    background-color: #ffde74;
    color: #333;
    cursor: pointer;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    }
    &:hover{
    background-position: 100% 0;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    }


`

export default StyledLinkRight