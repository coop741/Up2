import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap'
import Comment from "../Comment";
import "./Post.css";

class Post extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      show: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    console.log(this.props.description)
    if (this.props.comments !== undefined) {
      console.log("Comments exist")
      this.setState({ comments: this.props.comments })
    } else {console.log("comments don't exist in db")}
  }

  render() {
    const { first, last, title, image, description, value, date } = this.props;
    return (
      // {/*  date, value, hashtags */}
      <>
        <div className="col-md-4">
          <div className="post p-3">
            <div className="card">
              <img className="card-img-top" src={image} alt="post" />
              <div className="card-body">
                <h5 className="card-title">
                  {title}
                  <span className="badge badge-secondary ml-2">{value}</span>
                  <br />
                  <Button variant="primary" size="sm" onClick={this.handleShow}>Read More</Button>
                </h5>
                <p className="card-text">{description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-muted">
                  Written by {first} {last}
                </li>
                <li className="list-group-item text-muted">Posted {date}</li>

                {/* <li className="list-group-item">
                <p>
                  {hashtags.map(item => (
                    <span key={item} className="badge badge-secondary">
                      {item}
                    </span>
                  ))}
                </p>
              </li> */}
              </ul>
            </div>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {title}
              <img className="card-img-top" src={image} alt="post" />
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{description}</p>
            <div>
              {
                undefined !== this.state.comments && this.state.comments.length !== 0 &&
                  this.state.comments.length ? (
                    this.state.comments.map(singleComment => <Comment id={singleComment} />)
                  ) : (
                    <p>- - - - </p>
                  )
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <p>Written by: {first} {last} on {date}</p>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
        </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Post Comment
        </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Post;
