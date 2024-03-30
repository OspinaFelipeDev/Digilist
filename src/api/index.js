import axios from "axios";

// export const getPokemon = () => {
//     return axios
//     .get('https://digimon-api.vercel.app/api/digimon?limit=99')
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

export const getPokemon = () => {
    return axios
    .get('https://digimon-api.vercel.app/api/digimon?limit=99')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
    .then(res => res.data)
    .catch((err) => console.log(err));
}