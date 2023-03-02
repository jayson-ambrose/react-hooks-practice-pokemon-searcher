import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({postPokemon}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("")

  const handleNameChange = (e) => setName(e.target.value) 
  const handleHpChange = (e) => setHp(e.target.value) 
  const handleFrontChange = (e) => setFrontUrl(e.target.value) 
  const handleBackChange = (e) => setBackUrl(e.target.value) 

  function buildPokeObj () {
    return  {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    postPokemon(buildPokeObj())
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name} 
            onChange={handleNameChange}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={handleHpChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleFrontChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={handleBackChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
