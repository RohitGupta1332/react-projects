import React from 'react';
import './createPost.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Posts({ heading, desc }) {
    return (
        <div className="post-container">
            <div className="card" style={{ width: '25rem' }}>
            <img src="placeholder.jpg" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{desc}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
    );
}

export default Posts;
