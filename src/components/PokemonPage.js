import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokes, setPokes] = useState([])
  const [searchVal, setSearchVal] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(data => setPokes(data))
  }, [])  

  const handleChange = (e) => {
    setSearchVal(e.target.value)
  }

  const postPokemon = (obj) => {

    fetch("http://localhost:3001/pokemon", { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(data => setPokes([...pokes, data]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm postPokemon={postPokemon}/>
      <br />
      <Search handleChange={handleChange} searchVal={searchVal} />
      <br />
      <PokemonCollection pokes={pokes} searchVal={searchVal}/>
    </Container>
  );
}

export default PokemonPage;
