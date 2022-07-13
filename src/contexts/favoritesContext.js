import React from "react";
const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;