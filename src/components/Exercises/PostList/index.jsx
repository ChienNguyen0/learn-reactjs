import PropTypes from "prop-types";
import React from "react";

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: null,
};

function PostList(props) {
  const { posts } = props;

  return (
    <ul className="post-list">
      {posts.map((postItem) => (
        <li key={postItem.id}>{postItem.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
