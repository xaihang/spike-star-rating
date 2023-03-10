import React, { useState } from "react";
import {
  Box,
  Button,
  Rating,
  TextField,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const RecipeCommentForm = ({ onCommentSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      rating: rating,
      comment: comment.trim(),
    };
    onCommentSubmit(newComment);
    setRating(0);
    setComment("");
    setSubmitSuccess(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSubmitSuccess(false);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Typography sx={{mr: 2}} fontWeight="bold">
    Made it? Leave a review!
  </Typography>
          <Rating
            name="rating"
            value={rating}
            precision={1}
            onChange={handleRatingChange}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
          />
        </Box>
        <Box sx={{ mt: 2, width: '50%' }}>
          <TextField
            id="comment"
            label="Comment (optional)"
            multiline
            rows={4}
            value={comment}
            onChange={handleCommentChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Post Comment
          </Button>
        </Box>
      </form>
      <Snackbar open={submitSuccess} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Comment submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RecipeCommentForm;
