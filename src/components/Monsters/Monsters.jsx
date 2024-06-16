import React, { useState, useEffect } from 'react';
import { monstersQuery } from './monstersQuery';

function Monsters() {
  const [monsters, setMonsters] = useState(null);

  useEffect(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/8vygj1fquc3k/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 27a0dd821309f7039591c3d59fa1b7cf5a2761de5ec65c8a4f376804f08e49c1",
      },
      body: JSON.stringify({ query: monstersQuery }), // Use the monsters query here
    })
    .then(response => response.json())
    .then(data => setMonsters(data.data.monsterCollection.items))
    .catch(console.error);
  }, []);

  if (!monsters) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Monsters</h1>
      {monsters.map(monster => (
        <div key={monster.name}>
          <img src={monster.image.url} alt={monster.name} />
          <h2>{monster.name}</h2>
          <p>{monster.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Monsters;