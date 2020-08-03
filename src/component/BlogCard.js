import React from 'react';

import { Button} from 'react-bootstrap';


import './BlogCard.css'


const BlogCard = ({categoryBlog, titleBlog, textButton}) => {
  return(
    <div className="wrapper">
        <div className={"container mb-5 pr-3 pl-3"}>
              <div className={"row mb-2 mr-3 mt-3 ml-5 d-flex justify-content-left "} >
                  <div className="categoryCard">{categoryBlog}</div>
                  <h3>{titleBlog}</h3>
                  <Button variant="danger">{textButton}</Button>
              </div>
        </div>
    </div>
      
  );
}

export default BlogCard;