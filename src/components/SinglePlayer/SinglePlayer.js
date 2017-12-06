import React, { Component } from 'react';
import { connect } from  'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
import './SinglePlayer.css';

class SinglePlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: this.props.match.params.id,
      postData: {}
    }
  }

  componentDidMount(){

    axios.get(`http://suckboards.com/?rest_route=/wp/v2/posts/${this.props.match.params.id}`).then( response => {
          this.setState({
            postData: response.data
        })
      })
  }


  render(){

    let playlistButton = null;
      if (this.props.playlist.length){
        playlistButton = <Link to = "/playlist"><button className="playlistButton">+</button></Link>;
      }


    if( !this.state.postData.id ){
      return <div><Navigation /><div className="Loading"><h1>Loading...</h1></div></div>
    }

    return(
      <div>
        <Navigation />
        <div className="SinglePlayer">
        <Link to='/'><p className="btn">Close</p></Link>
          <h1 dangerouslySetInnerHTML={{__html: this.state.postData.title.rendered}} />
          <div className="responsiveVideo"dangerouslySetInnerHTML={{ __html: this.state.postData.content.rendered }} />

        </div>
        {playlistButton}
      </div>
    )
  }



}

function mapStateToProps(state){
  return {posts: state.posts, playlist: state.playlist}
}

export default connect ( mapStateToProps, {} )(SinglePlayer);
