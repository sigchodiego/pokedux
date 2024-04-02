import React from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

function PokemonList({ pokemons }) {
  console.log("pokemons: ", pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          title={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite}
        />
      ))}
    </div>
  );
}

// PokemonList.defaultProps = {
//   pokemons: Array(10).fill(""),
// };

export default PokemonList;
