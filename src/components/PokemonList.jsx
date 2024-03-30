// import PokemonCard from "./PokemonCard";

// const PokemonList = ({ pokemons }) => {
//     return (
//         <div className="PokemonList">
//             {pokemons.slice(0, 100).map((pokemon) => {
//                 return (
//                 <PokemonCard 
//                 name={pokemon.name} 
//                 key={pokemon.name}
//                 image={pokemon.img}
//                 types={[{ type: { name: pokemon.level } }]}
//                 id={pokemon.id}
//                 favorite={pokemon.favorite}
//                  />
//                 );
//             })}
//         </div>
//     );
// };

// PokemonList.defaultProps = {
//     pokemons: Array(10).fill(''),
// };

// export default PokemonList;


import { useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    const [pokemonFavorites, setPokemonFavorites] = useState(
        pokemons.map((pokemon) => pokemon.favorite)
    );

    const toggleFavorite = (index) => {
        const newFavorites = [...pokemonFavorites];
        newFavorites[index] = !newFavorites[index];
        setPokemonFavorites(newFavorites);
    };

    return (
        <div className="PokemonList">
            {pokemons.slice(0, 100).map((pokemon, index) => {
                return (
                    <PokemonCard 
                        name={pokemon.name} 
                        key={pokemon.name}
                        image={pokemon.img}
                        types={[{ type: { name: pokemon.level } }]}
                        id={pokemon.id}
                        favorite={pokemonFavorites[index]}
                        onClick={() => toggleFavorite(index)}
                    />
                );
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};

export default PokemonList;
