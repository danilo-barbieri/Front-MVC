import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --primary: #66CDAA;
    --secondary: #15181C;
    --tercery: #FF7A00;
    --terceryligth: #ff8e26;
    --gray: #C0C0C0;
    --orangelight: #ffae52;
    --white: #F5FFFA;
    --darkgray: #33312f;
}

body{
    background: var(--white);
    color: var(--secondary);
    font-family: "Dosis", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
}

ul, nav{list-style-type: none;}
a{text-decoration: none;}
`