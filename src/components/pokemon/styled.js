import styled from "styled-components";

export const Container = styled.div`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  
  flex:1;
  border-radius: 10px;
  background-color: #87cefa;

  button {
    flex-direction: column;
    margin: 10px;
    background-color: #0e6f9f;
    padding: 5px 5px;
    border: none;
    border-radius: 10px;
    color: var(--white);
    cursor: pointer;
  }

  div.image-pokemon {
    width: 70px;
    height: 70px;
    margin-right:10px;
  }

  div.card-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right:2rem;
  }

  div.card-top h3 {
    text-transform: capitalize;
  }

  div.pokemon-type-text {
    margin: 10px;
    background-color: #0e6f9f;
    padding: 5px 5px;
    border: none;
    border-radius: 10px;
    color: var(--white);
    cursor: pointer;
    text-transform: capitalize;
  }

  div.card-botton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
