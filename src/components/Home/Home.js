import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts, getMorePosts } from './../../redux/properties';
import SinglePost from '../SinglePost/SinglePost';
import Navigation from '../Navigation/Navigation';
import Playlist from '../Playlist/Playlist';
import './Home.css';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      postTotal : 13
    }
  }

  getMorePostsButton = (offset) => {
    this.props.getMorePosts(offset);
    this.setState = {
      postTotal: this.state.postTotal + 10
    }
  }

  componentDidMount(){
    if (!this.props.posts.length){
      this.props.getAllPosts();
    }
  }

  render(){
    if(!this.props.posts.length){
      return <div><Navigation /><div className="Loading"><h1>Loading...</h1></div></div>
    }

    const posts = this.props.posts.map( (singlePost, index) =>{
      return <SinglePost key={index} info={singlePost} index={index} />
    })

    let playlistButton = null;
      if (this.props.playlist.length){
        playlistButton = <Link to = "/playlist"><button className="playlistButton">+</button></Link>;
      }


    return(
      <div>
        <Navigation />
        <div className="Home">
          <div>
            {posts}
          </div>
            <div>
              <button onClick = {() =>{this.getMorePostsButton(this.props.posts.length)}} className="loadMore">Load More</button>
            </div>
        </div>
        <div>
          {playlistButton}
        </div>
      </div>
    )
  }



}


function mapStateToProps (state) {
  return {
    posts: state.posts,
    playlist: state.playlist,
    currentVideo: state.currentVideo
  }
}

export default connect ( mapStateToProps, {getAllPosts, getMorePosts} )(Home);
