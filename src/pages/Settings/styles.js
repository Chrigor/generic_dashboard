import styled from 'styled-components';

export const Container = styled.div`
  grid-area:CG;
  
  margin: 0px 8px;
  padding: 8px;
  
  border-radius: 8px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:var(--quinary);
    border-radius:4px;
  }
  ::-webkit-scrollbar-track {
    background-color:var(--secondary);
  }
`;

