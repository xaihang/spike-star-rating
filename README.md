# SPIKE -  Implementing a Comment Form with 5 Stars Rating System

## Synopsis: 
This Spike focuses on implementing a comment form with 5 stars rating system for a recipe application using ReactJS with Material UI. The aim of this Spike is to research and analyze the approach and technology required to implement the rating system in the comment form.

---
## **TABLE OF CONTENT:**
1. [Demo](#demo)
1. [Approach](#approach)
1. [Star icons functionality](#star-icons-functionality)
1. [Success Alert](#success-alert)
1. [Conclusion](#conclusion)

---
## Demo:

---
## Approach:
The following approach was used to implement the rating system in the Comment Form component:

1. Implemented the rating system using ReactJS with Material UI.
1. Provided a "Post Comment" button for users to submit their comments and ratings.
1. Integrated Material UI to alert users when their comments and ratings are successfully posted.
1. Used ReactJS to display the submitted comments and ratings.
 
---
## Star icons functionality:
This code uses the Rating component from Material UI to display the star icons. The value prop is used to determine the current rating of the user, while the precision prop determines the number of decimal places that can be used for the rating.

The onChange prop is used to update the rating value as the user clicks on the star icons. The emptyIcon prop is used to set the opacity of the star icons that are not selected by the user.

This allows the user to easily select a rating for the recipe by clicking on the star icons.

```jsx
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

<Rating
  name="rating"
  value={rating}
  precision={1}
  onChange={handleRatingChange}
  emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
/>
```

---
## Success Alert

This function creates a new comment object with the current rating and comment values and sends it to the parent component via the onCommentSubmit prop. It also clears the form and sets the submitSuccess state to true, which triggers the Snackbar component to display a success alert.

```jsx
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

```
---
## Displaying Comments and Rating: 
This code maps over the comments array and displays each comment in a list format. The primary text of each item displays the rating with stars and the secondary text displays the comment text.
```jsx
{comments.map((comment, index) => (
  <ListItem key={index}>
    <ListItemText
      primary={`Rating: ${comment.rating} stars`}
      secondary={comment.comment}
    />
  </ListItem>
))}

```

---
## Conclusion:
The Spike successfully implemented a 5-star rating system within a Comment Form component using ReactJS with Material UI. Through this Spike, we learned how to allow users to submit their comments and ratings by clicking the "Post Comment" button and display the submitted comments and ratings using ReactJS. The approach taken in this Spike provided insight into the technology and approach required for this feature and proved to be a viable implementation.


