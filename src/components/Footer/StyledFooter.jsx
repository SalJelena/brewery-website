import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 2px;
    
    display: block;
    background-color: black;
    text-align: center;
      
    .footer-nav {
        list-style: none;    
        color: white;
        display: block;
    }

    li {
        display: inline-block;
        list-style-type: none;
        text-decoration: none;
    }

    img {
        width: 30px;
        padding: 5px;
    }

    .footer-copyright{
        color: white;
        display: block;
    }

    a {
        color: white;
        text-decoration: none;
    }
`

export default StyledFooter