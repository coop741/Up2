import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    const { first, last, title, image, desc, value, hashtags } = this.props;
    return (
      // {/*  date, value, hashtags */}

      <div className="col-md-4">
        <div className="post p-3">
          <div className="card">
            <img className="card-img-top" src={image} alt="post" />
            <div className="card-body">
              <h5 className="card-title">
                {title}
                <span class="badge badge-secondary ml-2">{value}</span>
              </h5>
              <p className="card-text">{desc}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-muted">
                Written by {first} {last}
              </li>
              <li class="list-group-item">{hashtags}</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
