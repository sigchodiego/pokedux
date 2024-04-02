import './App.css';
import { Col, Spin } from "antd";
import { Searcher } from './Components/Searcher';
import PokemonList from './Components/PokemonList';
import logo from './Statics/logo.svg'
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
// import { setPokemons as setPokemonsActions } from './actions'
import { getPokemonsWithDetails, setLoading, setPokemons } from './actions'
import { getPokemon, getPokemonDetails } from './api';
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';

// function App({ Pokemons, setPokemons }) {
function App() {
  // const [Pokemons, setPokemons] = useState([]);

  const Pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading)

  // console.log(Pokemons);
  useEffect(() => {
    const fetchPokemons = async () => {
      const Pokemons = await getPokemon();
      dispatch(setLoading);
      // const pokemonsDetailed = await Promise.all(Pokemons.map(pokemon => getPokemonDetails(pokemon)))
      // dispatch(setPokemons(Pokemons));
      // dispatch(setPokemons(pokemonsDetailed));
      dispatch(getPokemonsWithDetails(Pokemons));
    }
    fetchPokemons();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8} >
        <Searcher />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={Pokemons} />}
    </div>
  );
}

// const mapStateToProps = state => ({ Pokemons: state.pokemons })  // Funcion que recibe el estado y retorna un objeto cuyas propiedades van a ser enviadas a los props del componente que se esta conectando a Redux 


// const mapDispatchToProps = (dispatch) => ({ // Recibe el dispatcher de Redux y retorna un objeto con los actions creator que nosotros establecimos
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
