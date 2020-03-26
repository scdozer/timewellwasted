import React, {useState} from 'react';
import './style.css'
import styles from 'styled-components';

const PostContent = (post) => {

    post = post.post
    const [selectedPost, setSelectedPost] = useState(false);
    const [imgToggle, setImgToggle] = useState(false);


    return (
        <li key={post.id}>
            <img className="post-img" src={post.better_featured_image.source_url} style={imgToggle ? {opacity:1} : {}} />
            <h2 className="post-h2" 
                dangerouslySetInnerHTML={{__html: post.title.rendered}} 
                onClick={() => setSelectedPost(!selectedPost)}
                onMouseEnter={()=>{ setImgToggle(!imgToggle)} }
                onMouseLeave={()=>{ setImgToggle(!imgToggle)}}
            /> 
             {selectedPost && <div className="responsiveVideo" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>}
        </li>
    );
}
export default PostContent;