import React, {useState} from 'react';

const PostContent = (post) => {
    post = post.post
    const [selectedPost, setSelectedPost] = useState(false);
    return (
        <li key={post.id}>
            <h2 
                dangerouslySetInnerHTML={{__html: post.title.rendered}} 
                onClick={() => setSelectedPost(!selectedPost)} 
            /> 
             {selectedPost && <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>}
        </li>
    );
}
export default PostContent;