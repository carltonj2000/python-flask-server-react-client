import React from "react";
import { List, Header, Rating } from "semantic-ui-react";

function Movies({ movies }) {
  return (
    <List>
      {movies.map((movie, k) => (
        <List.Item key={k}>
          <Header>{movie.title}</Header>
          <Rating rating={movie.rating} maxRating={5} disabled />
        </List.Item>
      ))}
    </List>
  );
}

export default Movies;
