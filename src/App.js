import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { setLoading, setPokemons } from './actions';
import logo from './statics/logo.png';
import './App.css';

function App() {

const pokemons = useSelector(state => state.pokemons);
const loading = useSelector((state) => state.loading);
const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        dispatch(setPokemons(pokemonsRes));
        dispatch(setLoading(false));
    };

    fetchPokemons();

  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img className='title' src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
      <Spin spinning size='large' />
      </Col>
      ) : (
        <PokemonList pokemons={pokemons}/>
      )}
    </div>
  );
}


export default App;



















