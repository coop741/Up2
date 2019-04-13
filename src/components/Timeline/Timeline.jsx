import React, { Component } from "react";
import "./Timeline.css";
import PostContainer from "../PostContainer";
import LoadingSpinner from "../LoadingSpinner";

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      active: "newest"
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(by, array, e) {
    let arr = array.slice();
    switch (by) {
      case "highVal":
        arr.sort(function (a, b) {
          return b.value - a.value
        })
        break;
      case "lowVal":
        arr.sort(function (a, b) {
          return a.value - b.value
        })
        break;
      case "newest":
        arr.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date)
        })
        break;
      case "oldest":
        arr.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date)
        })
        break;
      default:
        return arr;
    }
    this.setState({ posts: arr, active: by })
  }

  render() {
    return (
      <div>
        {this.props.posts[0] === undefined &&
          <div className="loading-center mt-5">
            <LoadingSpinner />
          </div>
        }

        {this.props.posts[0] !== undefined &&
          <div className="timeline">
            <hr />
            <div className="row px-3 header">
              {/* ------ */}
              <h2>Events</h2>
              <div className="row pr-3 header-right">
                <p className="m-0 pr-3">Sort By:</p>
                <div className="btn-group">

                  <button type="button"
                    onClick={(e) => { this.handleClick("newest", this.props.posts, e) }}
                    className={this.state.active === "newest" ? 'active btn btn-outline-success' : 'btn btn-outline-success'}>
                    Newest
              </button>

                  <button type="button"
                    onClick={(e) => { this.handleClick("oldest", this.props.posts, e) }}
                    className={this.state.active === "oldest" ? 'active btn btn-outline-success' : 'btn btn-outline-success'}>
                    Oldest
              </button>

                  <button type="button"
                    onClick={(e) => { this.handleClick("highVal", this.props.posts, e) }}
                    className={this.state.active === "highVal" ? 'active btn btn-outline-success' : 'btn btn-outline-success'}>
                    Highest Importance
              </button>

                  <button type="button"
                    onClick={(e) => { this.handleClick("lowVal", this.props.posts, e) }}
                    className={this.state.active === "lowVal" ? 'active btn btn-outline-success' : 'btn btn-outline-success'}>
                    Lowest Importance
              </button>
                </div>
              </div>
            </div>
            <hr />

            <PostContainer posts={this.state.posts} />
          </div>}
      </div>
    );
  }
}

export default Timeline;
