import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
    overflow-x:hidden;
    background: var(--secondary);
  }

  *, button, input {
    border:0;
    outline:0;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --primary: #36393f;
    --secondary:#1E1E2F;
    --tertiary: #BF15A6;
    --quaternary: #2C68F5;
    --quinary: #0AAA96;
    --senary: #828386;
   
   --backgroundChart: #27293D;

    --white: #fff;
    --gray: #8a8c90;
 
    --notification: #f84a4b;
    --chart: #00D6B4;
    --mention-detail: #f9a839;
    --mention-message: #A035A1;
 
    --link: #5d80d6;

    --border-white: rgba(255,255,255,0.7);
  }
`;
