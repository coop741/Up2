import React, { Component } from 'react';
import './PostContainer.css'

class PostContainer extends Component {
    render() {
        return (
            <div className="post-container">
                {this.props.children}
            </div>
        )
    }
}

export default PostContainer;