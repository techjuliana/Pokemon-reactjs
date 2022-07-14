import styled from "styled-components";

export const Container = styled.div`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 10px;

  div.hold {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: var(--white);
  }

  div.pokedex-grid {
    display: flex;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
