import React from "react";

import Movies from "./Movies";
import MovieForm from "./MovieForm";
import "./App.css";
import { Container } from "semantic-ui-react";

function App() {
  const [movies, moviesSet] = React.useState([]);
  React.useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((d) => moviesSet(d.movies))
      .catch((e) => console.log(e));
  }, []);
  return (
    <Container style={{ marginTop: 20 }}>
      <MovieForm
        onNewMovie={(movie) =>
          moviesSet((currentMovies) => [movie, ...currentMovies])
        }
      />
      <Movies {...{ movies }} />
    </Container>
  );
}

export default App;
