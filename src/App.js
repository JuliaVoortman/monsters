import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

const query = `
{
  pageCollection(where: {title: "Home"}) {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

function App() {
 
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/8vygj1fquc3k/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer 27a0dd821309f7039591c3d59fa1b7cf5a2761de5ec65c8a4f376804f08e49c1",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.pageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>
          {page.title}
        </p>
      </header>
    </div>
  );
}

export default App;
