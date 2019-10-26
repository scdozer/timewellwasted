import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToPlaylist } from './../../redux/properties';
import { Link } from 'react-router-dom';
import './SinglePost.css';


class SinglePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: this.props.info,
      index: this.props.index
    }
  }

  render(){
    let background = this.state.info.better_featured_image ? this.state.info.better_featured_image.source_url : 'https://cdn-images-2.medium.com/max/1600/1*9ARaYhQ5RQgUHCWkpjOq3g.gif'
    let singlePostStyle = {
      background: `url(${background})`
    }
    return(
      <Link to = {`/post/${this.state.info.id}`} className="singlePostLink">
        <div key = {this.state.info.id} style={singlePostStyle}>
          <h1 dangerouslySetInnerHTML={{__html: this.state.info.title.rendered}} />

          {/* <div className="watchAndAdd">
            <Link to = {`/post/${this.state.info.id}`} className="singlePostLink"><p>Watch</p></Link>
            <p onClick = { () => this.props.addToPlaylist(this.props.info)}>Add</p>
          </div> */}
        </div>
      </Link>
    )
  }



}

function mapStateToProps(state){
  return {
    playlist: state.playlist,
    currentVideo: state.currentVideo
  }
}

export default connect( mapStateToProps, {addToPlaylist})(SinglePost)
