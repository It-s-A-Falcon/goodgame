import React from 'react';
import DeleteBtn from './DeleteBtn.jsx';

const Result = (props) => (
  <div>
    <h2>{props.title}</h2>
    <i><p>Description</p></i>
    <p>{props.description}</p>
    <i><p>Genre</p></i>
    <p>{props.genre}</p>
    <i><p>Platform</p></i>
    <p>{props.platform}</p>
    <i><p>Review</p></i>
    <p>{props.review}</p>
    <input type="submit" value="Update"></input>
    <DeleteBtn />
  </div>
);

export default Result;