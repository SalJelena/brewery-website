import { createGlobalStyle } from "styled-components";


import fontNew from './Anton-Regular.woff'
import fontReg from './QuattrocentoSans-Regular.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Anton';
        font-style: sans-serif;
        src: url(${fontNew}) format('woff');
        /* font-family: 'Quattrocento Sans';
        font-style: sans-serif;
        src: url(${fontReg}) format('woff'); */
    }
`
