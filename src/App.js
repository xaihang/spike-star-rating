import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RecipeCommentForm from "./RecipeCommentForm/RecipeCommentForm";
import RecipeCommentList from "./RecipeCommentList/RecipeCommentList";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Star Rating</h1>
      <RecipeCommentForm onCommentSubmit={handleCommentSubmit} />
      <RecipeCommentList comments={comments} />
    </div>
  );
}

export default App;
