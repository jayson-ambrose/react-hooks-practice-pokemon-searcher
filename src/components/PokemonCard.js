import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {

  const [side, setSide] = useState(true)

  const {id, name, hp, sprites} = poke
  const {front, back} = sprites



  return (
    <Card>
      <div>
        <div className="image">
          <img src={side ? front : back} onClick={()=> setSide(!side) }alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
