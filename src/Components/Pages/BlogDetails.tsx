import { useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
import { useHistory } from "react-router-dom";
import React from "react";

 interface Blog {
    title: string;
    author: string;
    body: string;
    id: string;
}

type  Props = {
    id: string;
}




const BlogDetails = () => {

    const {id} = useParams<Props>();
    const {data: blog, error, isLoading} =  useFetch <Blog> ('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = (blog: Blog) => {
        
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then (() =>{
            history.push('/')
        })
    }
    
    return ( 
        <div className="blog-details">
                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by <span >{blog.author}</span></p>
                        <div>{blog.body}</div>
                        <button onClick ={() => handleClick (blog)}>Delete</button>
                    </article>
                )}
        </div>
     );
}
 
export default BlogDetails
