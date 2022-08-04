import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body{
        background-color: blue;
        padding: 0;
        margin: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 18px;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }

    #main{
        background-color: turquoise;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        width: 50vw;
        margin-bottom: 200px;
        padding: 25px;
        box-shadow: 20px 20px 20px;
    }

    h1{
        color: white;
        text-transform: uppercase;
    }
    
`



