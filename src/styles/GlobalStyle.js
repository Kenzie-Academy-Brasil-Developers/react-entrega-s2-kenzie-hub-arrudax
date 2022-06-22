import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

}
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
}

body, input, button {
   font-family: 'Inter', sans-serif;

}

ul, li, ol {
    list-style: none;
}

h1, h2, h3 {
     font-size: 16px;
     font-weight: bold;
}

p {
     font-size: 12px;
     font-weight: 400;
}

span{
     font-size:  12px;
     font-weight: bold;
}

button {
    cursor: pointer;
}
a {
    text-decoration: none;
}
`;
