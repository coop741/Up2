import React, { Component } from "react";
import {Modal, Button, Form} from 'react-bootstrap'
import Comment from "../Comment";
import { connect } from "react-redux";
import { setEventID } from "../../redux/store";
import "./Post.css";
import API from '../../utils/API'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      postId: '',
      show: false,
      showComment: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.postComment = this.postComment.bind(this)
    this.showComment = this.showComment.bind(this)
    this.closeComment = this.closeComment.bind(this)
  }

  postComment(event) {
    event.preventDefault()
    let post = {
      comment: event.target.elements.comment_form.value,
      author: "Unknown"
    }
    console.log("Pushing to comments")
    API.createComment(post).then((res) => {
      let commentId = {comments: res.data._id}
      API.updatePost(this.state.postId, commentId)
    }
    )
    this.setState({ showComment: false})
  }

  showComment() {
    this.setState({ showComment: true })
  }

  closeComment() {
    this.setState({ showComment: false })
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({comments: this.props.comments, postId: this.props.id})
  }

  render() {
    const { _id, first, last, title, image, description, value, date } = this.props;
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
                </h5>
                <p className="card-text">{description}</p>
                  <Button variant="outline-success" size="sm" onClick={this.handleShow}>Read More</Button>
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
              {this.state.comments.length ? (
                this.state.comments.map(singleComment => <Comment id={singleComment} />)
              ) : (
                <p>- - - - </p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <p>
              Written by: {first} {last} on {date}
            </p>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
        </Button>
        <Button variant="primary" onClick={this.showComment}>
          Post Comment
        </Button>
      </Modal.Footer>
      </Modal>

      <Modal show={this.state.showComment} size="md" onSubmit={this.postComment}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="comment">
              <Form.Label>Comment:</Form.Label>
              <Form.Control name="comment_form" as="textarea" rows="3"/>
            </Form.Group>  
            <Button variant="primary" size="sm" type="submit">Post Comment</Button>
          </Form>
          <Button variant="secondary" size="sm" onClick={this.closeComment}>Close</Button>
        </Modal.Body>
      </Modal>
      </>
    );
  }
}

export default connect(
  null,
  { setEventID }
)(Post);
