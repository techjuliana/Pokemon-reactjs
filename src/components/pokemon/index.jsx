import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import { Container } from "./styled";

export default function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
  return (
    <Container>
      <div className="card-top">
        <div className="image-pokemon">
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>

        <h3> {pokemon.name}</h3>
        <div>N: {pokemon.id}</div>
      </div>

      <div className="card-bottom">
        {pokemon.types.map((type, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              {" "}
              {type.type.name}
            </div>
          );
        })}
        <button onClick={onHeartClick}> Favoritar {heart}</button>
      </div>
    </Container>
  );
}
