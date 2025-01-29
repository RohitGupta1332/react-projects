import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Posts from "./Posts";

function PostList() {
    const [post, setPost] = useContext(PostContext)
    return (
        <>
            {
                post.map((post, index) => (
                    <Posts key={index} heading={post.heading} desc={post.description}></Posts>
                ))
            }
        </>
    )
}
export default PostList