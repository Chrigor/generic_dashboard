import styled from "styled-components";

// MH - Main Header
// SB - SideBar
// CG - Container Generic

export const Container = styled.div`
  display: grid;

  grid-template-columns: 250px auto; /* este auto deixa o tamanho automatico (pega todo espaco disponivel) */
  grid-template-rows: 80px auto auto auto;
  grid-template-areas:
    "MH MH"
    "SB CG"
    "SB CG"
    "SB CG";
  height: 100%;
  background:var(--secondary);

  padding: 0px 20px 10px 20px;
`;
