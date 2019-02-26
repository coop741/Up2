import React, { Component } from "react";
import {Modal, Button, Form} from 'react-bootstrap'
import Comment from "../Comment";
import "./Post.css";

class Post extends Component {
  constructor(){
    super()
    this.state = {
      comments: [],
      show: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.postComment = this.postComment.bind(this)
    this.showComment = this.showComment.bind(this)
    this.closeComment = this.closeComment.bind(this)
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
    console.log(this.props.description)
    this.setState({comments: this.props.comments})
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
                <br/>
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
          {this.state.comments.length ? (
            this.state.comments.map(singleComment => <Comment id={singleComment} />)
          ) : (
            <p>- - - - </p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p>Written by: {first} {last} on {date}</p>
        <Button variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={this.showComment}>
          Post Comment
        </Button>
      </Modal.Footer>
      </Modal>

      <Modal.Dialog size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="comment">
              <Form.Label>Comment:</Form.Label>
              <Form.Control as="texarea" placeholder="Comment Here" rows="4"/>
            </Form.Group>  
            <Button variant="primary" type="submit">Save changes</Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeComment}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>;
      </>
    );
  }
}

export default Post;
