import React, { FormEvent } from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom"
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    
    



    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const blog ={title, body, author};

        setIsLoading(true);

       fetch('http://192.168.1.66:8000/blogs', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(blog)
       }) .then(()=> {
           console.log('new blog added');
           setIsLoading(false);
           history.push('/');
       });
    }
    
    
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ></input>

                <label>Blog body:</label>
                <textarea 
                required
                value= {body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="liedson">liedson</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button>Adding blog...</button>}
                
            </form>

        </div>
     );
}
 
export default Create;
