import './App.css';
import { Col } from "antd";
import { Searcher } from './Components/Searcher';
import PokemonList from './Components/PokemonList';
import logo from './Statics/logo.svg'
import { useEffect, useState } from 'react';
import { setPokemons as setPokemonsActions } from './actions'
import { getPokemon } from './api';
import { connect } from 'react-redux';

function App({ Pokemons, setPokemons }) {
  console.log(Pokemons);
  // const [Pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const Pokemons = await getPokemon();
      setPokemons(Pokemons);
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
      <PokemonList pokemons={Pokemons} />
    </div>
  );
}

const mapStateToProps = state => ({ Pokemons: state.pokemons })  // Funcion que recibe el estado y retorna un objeto cuyas propiedades van a ser enviadas a los props del componente que se esta conectando a Redux 


const mapDispatchToProps = (dispatch) => ({ // Recibe el dispatcher de Redux y retorna un objeto con los actions creator que nosotros establecimos
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
