import React, { useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, content: newPost, likes: 0 }]);
      setNewPost('');
    }
  };

  const handleLikePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div>
      <h1>Feed</h1>
      <div>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's happening?"
        />
        <button onClick={handleAddPost}>Post</button>
      </div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>{post.content}</p>
            <button onClick={() => handleLikePost(post.id)}>Like ({post.likes})</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;