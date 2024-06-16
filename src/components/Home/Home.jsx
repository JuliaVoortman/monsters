import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeQuery } from './homeQuery';

function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/8vygj1fquc3k/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 27a0dd821309f7039591c3d59fa1b7cf5a2761de5ec65c8a4f376804f08e49c1",
      },
      body: JSON.stringify({ query: homeQuery }), // Use the home page query here
    })
    .then(response => response.json())
    .then(data => setHomeData(data.data.pageCollection.items[0]))
    .catch(console.error);
  }, []);

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <img src={homeData.logo.url} alt="Home Logo" />
        <h1>{homeData.title}</h1>
      </header>
      <Link to="/monsters">See the monsters</Link>
    </div>
  );
}

export default Home;