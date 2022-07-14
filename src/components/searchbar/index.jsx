import React, { useState } from "react";
import { Container } from "./styled";

export default function Searchbar(props) {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <Container>
      <div className="input-pokemon">
        <input placeholder="Buscar Pokemon..." onChange={onChangeHandler} />
      </div>
      <div className="button-pokemon">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </Container>
  );
}
