import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body{
        
        padding: 0;
        margin: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 18px;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(45deg, pink,  #8228FA, #2D47FA, #2EDBFA);
        background-size: 200% 200%;
        animation: ease infinite animaBg 10s;
        
        
        
    }
    
            @keyframes animaBg {
                0%{
                    background-position: 0% 50%;
                    
                }
                50%{
                    background-position: 100% 50%;
                    
                }
                100%{
                    background-position: 0% 50%;
                    
                }
                
            }

    #main{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60vh;
        width: 40vw;
        margin-bottom: 200px;
        
        box-shadow: 20px 20px 20px;
        border: 1px solid white;
        border-radius: 5px;
    }

    h1{
        color: white;
        text-transform: uppercase;
        padding-top: 20px;
        font-family: 'Square Peg', cursive;
    }

    .iceCream{
        width: 20px;
        color: white;
        padding-right: 10px;
    }
    
`






