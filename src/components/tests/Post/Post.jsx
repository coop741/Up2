import React, { Component } from "react";

class Post extends Component {
  render() {
    const {
      first,
      last,
      title,
      image,
      desc,
      value,
      hashtags,
      date
    } = this.props;
    return (
      // {/*  date, value, hashtags */}

      <div className="col-md-4">
        <div className="post p-3">
          <div className="card">
            <img className="card-img-top" src={image} alt="post" />
            <div className="card-body">
              <h5 className="card-title">
                {title}
                <span className="badge badge-secondary ml-2">{value}</span>
              </h5>
              <p className="card-text">{desc}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-muted">
                Written by {first} {last}
              </li>
              <li className="list-group-item text-muted">Posted {date}</li>

              <li className="list-group-item">
                <p className="tags-container">
                  {hashtags.map(item => (
                    <span key={item} className="badge badge-secondary tags">
                      {item}
                    </span>
                  ))}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
