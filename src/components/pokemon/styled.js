import styled from "styled-components";

export const Container = styled.div`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex:1;
  border-radius: 10px;
  background-color: #87cefa;

  button {
    flex-direction: row;
    margin: 10px;
    background-color: #0e6f9f;
    padding: 5px 5px;
    border: none;
    border-radius: 10px;
    color: white;
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
  }

  div.card-top h1 {
    text-transform: capitalize;
  }

  div.pokemon-type-text {
    margin-right: 10px;
    background-color: yellow;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
  }

  div.card-botton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
