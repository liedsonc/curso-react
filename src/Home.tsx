import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from "./useFetch";
import BlogList from './BlogList';
import { Blog } from './BlogList';




const Home = () => {
    const { data: blogs, isLoading, error } = useFetch<Blog []>('http://localhost:8000/blogs');
   
    return ( 
        <div className="home">
          <h1>OLLLLLL</h1>
          { error && <div>{ error }</div>}
          {isLoading && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} 
          title='All Blogs!' /> }
          
        </div>
     );
}
 
export default Home;