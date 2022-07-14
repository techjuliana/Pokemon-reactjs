import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 0;
  align-items: center;
  color: var(--white);

  button {
    background-color: #0e6f9f;
    border: none;
    border-radius: 25px;
    color: white;
    padding: 8px 12px;
  }
`;
