import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
    return (
      <div>
        <h2>My Posts</h2>
        {posts.map((post) => {
          return <Post title={post.title} body={post.body} key={post.title} />;
        })}
      </div>
    );
}

export default Posts; 