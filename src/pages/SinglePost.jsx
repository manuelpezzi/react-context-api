import { useEffect, } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

function SinglePost() {
    const { id } = useParams();
    const { post, getPostById } = useGlobalContext();
    const navigate = useNavigate();



    useEffect(() => {
        getPostById(id);
    }, [id]);

    return (
        <div className="container mt-4">
            <h1>Dettaglio del Post: {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt={post.title} className="img-fluid mt-3" />}
            <h4>Tags:</h4>
            <ul>
                {post.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <div>
                <h1>ID prodotto:{id}</h1>
                <button className="btn btn-primary" onClick={() => navigate(-1)}>
                    torna al precedente
                </button>
            </div>
        </div>

    );
};

export default SinglePost;