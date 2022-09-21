import React from 'react';
import useFetch from "../useFetch/useFetch";
import BlogList from '../BlogList/BlogList';
import { Blog } from '../BlogList/BlogList';




const Home = () => {
    const { data: blogs, isLoading, error } = useFetch<Blog []>('http://localhost:8000/blogs');
   
    return ( 
        <div className="home">
          { error && <div>{ error }</div>}
          {isLoading && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} 
          title='All Blogs!' /> }
          
        </div>
     );
}
 
export default Home;