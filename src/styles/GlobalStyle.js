import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F; 
    --Color-primary-Negative: #59323F;

    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: ##343B41;
    --Grey-1: #868E96;
    --Grey-0: ##F8F9FA;

    --Sucess: #3FE864;
    --Negative: #E83F5B;

    --Color-text: #fff;

    --Hover-card: #343B41;
    --Hover-btn2: #59323F;

    --Trash: rgba(255, 255, 255, 0.8);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    
    font-family: 'Inter', sans-serif;

}
body {
    background-color: var(--Grey-4);
}

ul, li, ol {
    list-style: none;
}

h1, h2, h3 {
     font-size: 16px;
     font-weight: bold;
     color: var(--Color-text);
}

p, label {
     font-size: 12px;
     font-weight: 400;
     color: var(--Color-text);

}

span{
     font-size:  12px;
     font-weight: bold;
     color: var(--Grey-1);


}

button {
    cursor: pointer;
}

a {
    text-decoration: none;

}

.ReactModal__Content, .ReactModal__Content--after-open {
 

    .modal__header {
        padding: 20px 20px 20px 20px;
        background-color: #343B41;
        >div {  
    
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            h1 {
                color: var(--Color-text);
            }
        
            button {
                background: none;
                border: none;
        
                &:hover {
                background: none;
        
                }
            }
        }        
    }
}

form {
    padding: 1rem;

    .campo1 {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        input {
            max-width: 400px;

            background-color: var(--Grey-1);
            color: var(--Color-text);

            width: 100%;
            height: 48px;

            border: none;
            border-radius: 5px;
            padding: 0.7rem;

            &::placeholder {
                color: var(--Color-text);

                font-family: "Inter", sans-serif;
                font-weight: 400;
                font-size: 16px;
            }

            &:focus {
                border: 1px solid var(--Color-text);
                padding: 1rem;
                font-family: "Inter", sans-serif;
                font-weight: 400;
                font-size: 16px;
            }
        }
    }

    .campo2 {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        select {
            max-width: 400px;
         

            background-color: var(--Grey-1);
            color: var(--Color-text);
            width: 100%;
            height: 48px;
            border: none;
            border-radius: 5px;
            padding: 0.7rem;
        }
    }

    .campoBtn {
        
        button {
            max-width: 320px;
            height: 48px;
            border: none;
            border-radius: 5px;
        }
        
        .btn__save {
            background-color: var(--Color-primary-Negative);
            width: 65%;
            
            color: white;
            
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            margin-right: 1rem;
            
            
            &:hover {
                background-color: var(--Color-primary-Focus);
            }
        }
        
        .btn__delete {
            background-color: var(--Grey-1);
            width: 30%;
            
            color: white;
            
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            
            &:hover {
                background-color: #343b41;          
            }
        }
    }
}

`;
