import React, { useState, useEffect } from 'react';

import ForumSort from './ForumSort.jsx';
import ForumAddPost from './ForumAddPost.jsx';
import Post from './Post/Post.jsx';
import request from '../lib/getInfo.js';
import { StyledLoadingIcon } from '../css/sharedcss.jsx';

const Forum = () => {
  const [userLogin, setUserLogin] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [questionsPerPress, setQuestionsPerPress] = useState(15);

  const refreshPosts = () => {
    setLoading(true);
    request.getPostsRequest()
      .then((list) => {
        const unsortedPosts = list.data;
        setPosts(unsortedPosts.slice(0, questionsPerPress));
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  let loadPosts;

  loadPosts = isloading ?
    <StyledLoadingIcon className="fas fa-spinner fa-pulse fa-2x"></StyledLoadingIcon> :
    posts.map((post) => (
      <Post
        key={post.questionID}
        id={post.questionID}
        username={post.username}
        title={post.title}
        question={post.question}
        needStamp={post.needStamp}
        needDetail={post.needDetail}
        voteCount={post.voteCount}
        peLicensed={post.peLicensed}
        seLicensed={post.seLicensed}
      />
    ));

  return (
    <>
      <ForumSort />
      <ForumAddPost refreshPosts={refreshPosts} />
      {loadPosts}
    </>
  );
};

export default Forum;