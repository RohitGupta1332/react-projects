import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';
import './createPost.css'

function CreatePost() {
    const [post, setPost] = useContext(PostContext);

    const [heading, setHeading] = useState('');
    const [desc, setDesc] = useState('');

    const addPost = (e) => {
        e.preventDefault();

        const newPost = {
            heading: heading,
            description: desc
        };

        setPost([...post, newPost]); // Correct usage of setPost

        setHeading('');
        setDesc('');
    }

    return (
        <div className="form-container">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setHeading(e.target.value)} value={heading} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setDesc(e.target.value)} value={desc} />
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Select image: </label>
                    <input class="form-control" type="file" id="formFile" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={(e) => addPost(e)}>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
