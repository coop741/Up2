import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Comment.css';
import API from '../../utils/API';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {}

        this.deleteThisComment = this.deleteThisComment.bind(this);
    }

    componentDidMount(){
        API.getComment(this.props.id).then(res => {
            this.setState({
                comment: res.data.comment,
                postDate: res.data.postDate
            })
        })
    }

    deleteThisComment(){
        API.deleteComment(this.state.id)
    }

    render(){
        return(
            <div className="container-comment">
                <p >{this.state.comment}</p>
                <p className="date">Posted: {this.state.postDate}</p>
                <Button size="sm" variant="outline-danger" onClick={this.deleteThisComment}>X</Button>
            </div>
        )
    }
}

export default Comment;