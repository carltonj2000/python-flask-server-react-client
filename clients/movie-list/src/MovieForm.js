import React from "react";
import { Form, Input, Rating, Button } from "semantic-ui-react";

function MovieForm({ onNewMovie }) {
  const [title, titleSet] = React.useState("");
  const [rating, ratingSet] = React.useState(1);
  const submitMovie = () => {
    const movie = { title, rating };
    fetch("/add_movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((r) => {
        if (r.ok) {
          onNewMovie(movie);
          titleSet("");
          ratingSet(1);
        } else console.log("add movie failed");
      })
      .catch((e) => console.log("Failed! /add_movie with", e.message));
  };
  return (
    <Form>
      <Form.Field>
        <Rating
          style={{ display: "inline" }}
          rating={rating}
          maxRating={5}
          onRate={(_, e) => ratingSet(e.rating)}
        />
        <Input
          style={{ display: "inline" }}
          placeholder="movie title"
          value={title}
          onChange={(e) => titleSet(e.target.value)}
        />
        <Button onClick={submitMovie}>Submit</Button>
      </Form.Field>
    </Form>
  );
}

export default MovieForm;
