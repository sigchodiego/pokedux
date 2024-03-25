import React from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

function PokemonList({ pokemons }) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          title={pokemon.name}
          image={pokemon.url}
        />
      ))}
    </div>
  );
}

// PokemonList.defaultProps = {
//   pokemons: Array(10).fill(""),
// };

export default PokemonList;
