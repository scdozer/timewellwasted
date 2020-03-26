import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from 'styled-components';
import Posts from './posts.js';


function VideoStream() {
    const [ count, setCount ] = useState(0)
    const [posts, setPosts] = useState([]);
    const [loading, setLoading]= useState(true)

    let currentPosts = posts;

    useEffect(() => {
        setLoading(true)
        axios.get(`https://timewellwasted.online/wp/wp-json/wp/v2/posts?per_page=10&offset=${count}`) 
        .then ( response => {
            let updatedPosts = currentPosts.concat(response.data)
                setPosts(updatedPosts);
                setLoading(false)
        })
      }, [count]);



    const MoreButton = styles.button`
        display:block;
        margin-top: 30px;
        background: transparent;
        width: auto;
        margin: 70px auto;
        color: #fff;
        border: 2px solid #fff;
        padding: 15px 40px;
        font-weight: bold;
        font-size: 18px;
    `;
    const VideoStreamWrapper = styles.div`
        margin: 0 auto;
        width: 70%;
        color: #fff;
        @media (max-width: 768px) {
            width: 90%;
          }
    `;
  return (
      <>
    <VideoStreamWrapper>
      {posts.length >= 1 && <Posts posts={posts} />}
      {loading && `loading...`}
      {posts.length >= 1 && <MoreButton onClick={() => setCount(count + 10)}>more</MoreButton>}
    </VideoStreamWrapper>
    </>
  );
}

export default VideoStream;
