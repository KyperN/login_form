import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
export default function Home() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.login.loggedUser.userName);
  const posts = useSelector((state) => state.posts.posts);

  const [post, setPost] = useState(null);
  const activeUserPosts = posts.filter((elem) => elem.id === loggedUser);
  const otherUsersPosts = posts.filter((elem) => elem.id !== loggedUser);

  const postHandler = (e) => {
    setPost({ text: e.target.value, id: loggedUser });
  };
  const addPost = (post) => {
    dispatch({ type: 'ADD_POST', payload: post });
  };
  return (
    <div className="block">
      <h1 className="greeting">Hello user {loggedUser}</h1>
      <input
        placeholder="Post..."
        className="post-input"
        onChange={(e) => {
          postHandler(e);
        }}
        type="text"
      />
      <button
        className="btn"
        onClick={() => {
          addPost(post);
        }}>
        Submit
      </button>
      <div className="posts">
        Your posts:
        {activeUserPosts.map((elem) => (
          <ul className="user-posts">
            <li className="post">{elem.text}</li>
          </ul>
        ))}
      </div>
      <div className="other-posts">
        Posts by other users:{' '}
        {otherUsersPosts.length === 0
          ? 'Nobody posted anything'
          : otherUsersPosts.map((elem) => (
              <ul>
                <li className="post">
                  {elem.text}
                  <br /> posted by: {elem.id}
                </li>
              </ul>
            ))}
      </div>
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
    </div>
  );
}
