import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ author, content, timestamp, likes, comments }) => {
    return (
        <div className="post">
            <h3>{author}</h3>
            <p>{content}</p>
            <span>{new Date(timestamp).toLocaleString()}</span>
            <div className="post-actions">
                <button>Like {likes}</button>
                <button>Comment ({comments.length})</button>
                <button>Share</button>
            </div>
        </div>
    );
};

Post.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
};

export default Post;