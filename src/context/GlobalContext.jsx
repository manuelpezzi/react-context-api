
import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
        image: '',
        tags: [],
    });


    const fetchPosts = () => {
        fetch("http://localhost:3000/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Errore nel caricamento dei post:", error));
    };

    const getPostById = (id) => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(error => console.error("Errore nel caricamento del post:", error));
    };

    const value = {
        posts,
        post,
        fetchPosts,
        getPostById
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
