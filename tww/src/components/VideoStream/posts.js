import React, {useState} from 'react';
import styles from 'styled-components';
import PostContent from './post.js';

const Posts = (posts) => {
    const PostWrapper = styles.ul`
        color: #fff;
        list-style-type:none;
        padding-left: 0px;
        li {
            border-top: 2px solid;
            h2 {
                width: 100%;
            }
        }
    `;
return (
    <PostWrapper>
    {posts.posts.map(post => (
        <PostContent post={post} key={post.id}/>
    ))}
    </PostWrapper>
);
}
export default Posts;