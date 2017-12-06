import React, { Component } from 'react';
import { connect } from  'react-redux';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { updatePlaylist } from './../../redux/properties';
import './Playlist.css';

class Playlist extends Component {

  render(){

    if(!this.props.playlist.length){
      return <div><Navigation /><div className="Loading"><h1>Youre gunna need to make a playlist!</h1>
      <Link to="/"><p class="btn">Home</p></Link></div></div>
    }

      const posts = this.props.playlist.map( (singlePost, index) =>{
          let background = singlePost.better_featured_image ? singlePost.better_featured_image.source_url : 'https://cdn-images-2.medium.com/max/1600/1*9ARaYhQ5RQgUHCWkpjOq3g.gif'
          let singlePostStyle = {
            background: `url(${background})`,
            color: '#fff',
            cursor: 'pointer'
          }

          return (
            <div key ={singlePost.id}>
                <div key={singlePost.id} style={singlePostStyle}>
                  <h2 dangerouslySetInnerHTML={{__html: singlePost.title.rendered}}
                      onClick = { () => this.props.updatePlaylist(this.props.playlist[index], index)} />
                </div>
              </div>
          )

      })


    return(
      <div>
      <Navigation/>
      <div className="playlist">
        <div key={this.props.currentVideo.id} className="currentVideo">
        {/*}<a href="#" className="singlePlayerClose" onClick= {this.props.history.goBack}>
          <p className="btn">Close</p>
        </a>*/}
        <Link to='/'><p className="btn">Close</p></Link>
        <h2 dangerouslySetInnerHTML={{__html: this.props.currentVideo.title.rendered}} />
        <div className="responsiveVideo" dangerouslySetInnerHTML={{ __html: this.props.currentVideo.content.rendered }} />
        </div>
        <div className="playlistPosts">
          <h2>Playlist</h2>
          {posts}
        </div>
      </div>
      </div>
    )
  }



}

function mapStateToProps(state){
  return {
    playlist: state.playlist,
    currentVideo: state.currentVideo
  }
}

export default connect ( mapStateToProps, {updatePlaylist} )(Playlist);
