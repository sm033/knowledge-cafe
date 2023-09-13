import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddBookMark,handleRead}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect ( ()=>{
        fetch ('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3 lg:w-2/3">
           
          {
            blogs.map(blogInfo => <Blog 
                key={blogInfo.id} 
                blog={blogInfo}
                handleAddBookMark = {handleAddBookMark}
                handleRead = {handleRead}
                >
                </Blog>)
          
          }
        </div>
    );
};
Blogs.propTypes ={
    handleAddBookMark:PropTypes.func,
    handleRead:PropTypes.func
}

export default Blogs;