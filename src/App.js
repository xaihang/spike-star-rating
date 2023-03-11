import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RecipeCommentForm from "./RecipeCommentForm/RecipeCommentForm";


function App() {
  const handleCommentSubmit = (newComment) => {
    console.log("New comment submitted:", newComment);
    // Add code here to handle the new comment submission, such as adding it to a list of comments or submitting it to a server
  };

  return (
    <div>
      <h1>Star Rating</h1>
      <RecipeCommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}

export default App;
