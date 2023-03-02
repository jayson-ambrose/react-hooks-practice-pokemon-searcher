import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokes, searchVal}) {

  const pokeCards = pokes.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0)
  .filter(poke => poke.name.includes(searchVal)).map((poke) => <PokemonCard key={poke.id} poke={poke} />)

  console.log(searchVal)
  
  return (

    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>

  );
}

export default PokemonCollection;
