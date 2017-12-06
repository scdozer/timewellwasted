import axios from 'axios';

const initialState = {
  posts : {},
  addPosts: {},
  playlist : {},
  currentVideo: {}
}


const GET_ALL_POSTS = 'GET_ALL_POSTS';
const GET_MORE_POSTS = 'GET_MORE_POSTS';
const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
const UPDATE_PLAYLIST = 'UPDATE_PLAYLIST';





export function getAllPosts(){
  const morePosts =
    axios.get('http://www.suckboards.com/wp-json/wp/v2/posts?per_page=13') .then ( response => {
      return response.data
    })
    return {
      type: GET_ALL_POSTS,
      payload: morePosts
    }
}


export function getMorePosts(offset){
  const posts =
    axios.get(`http://www.suckboards.com/wp-json/wp/v2/posts?per_page=10&offset=${offset}`) .then ( response => {
      return response.data
    })
    console.log(posts)
    return {
      type: GET_MORE_POSTS,
      payload: posts
    }
}



export function addToPlaylist(post){
  return{
    type: ADD_TO_PLAYLIST,
    payload: post
  }
}

export function updatePlaylist(post, index){
  return {
    type: UPDATE_PLAYLIST,
    payload: {post: post, index: index}
  }
}



export default function properties(state = initialState, action){
  switch (action.type){
    case GET_ALL_POSTS + '_FULFILLED':
      return Object.assign({}, state, {posts: action.payload});
    case GET_MORE_POSTS + '_FULFILLED':
      return Object.assign({}, state, {posts: [...state.posts, ...action.payload], addPosts: action.payload});
    case ADD_TO_PLAYLIST:
      return Object.assign({}, state, {playlist: [...state.playlist, action.payload], currentVideo: action.payload})
    case UPDATE_PLAYLIST:
     console.log('index', action.payload.index);
      return Object.assign({}, state, {currentVideo: action.payload.post})
    default:
      return state;
  }
}
