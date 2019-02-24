import React, {Component} from 'react';
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
            <div className="container">
                <p className="commentText">{this.state.comment}</p>
                <br />
                <p className="date">Posted: {this.state.postDate}</p>
                <button className="btn btn-outline.danger btn-sm" onClick={this.deleteThisComment}>X</button>
            </div>
        )
    }
}

export default Comment;