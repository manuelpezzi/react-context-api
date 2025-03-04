import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
function Posts() {
    const { posts, fetchPosts } = useGlobalContext();


    useEffect(() => {
        fetchPosts()
    }, []);
    return (
        <div className="container mt-4">
            <h2>Lista dei Post</h2>
            <ul className="list-group ">
                {posts.map(post => (
                    <li key={post.id} className="list-group-item  bg-dark text-light">
                        <h5>{post.title}</h5>
                        <p>{post.content.substring(0, 50)}...</p>
                        <NavLink
                            to={`/posts/${post.id}`}
                            className="btn btn-primary"
                            style={({ isActive }) => ({
                                backgroundColor: isActive ? "#0056b3" : "#007bff",
                                borderColor: isActive ? "#004085" : "#007bff"
                            })}
                        >
                            Leggi di più
                        </NavLink>
                    </li>

                ))}
            </ul>
        </div>
    )
} export default Posts;