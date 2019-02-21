import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
    render() {
        return (
            // {/*  date, value, hashtags */}
            <div className="post">
                {/* Post.css has styles that override the size of the card */}
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt="post" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title} <span className="badge badge-primary">{this.props.value}</span></h5>
                        <p className="card-text">{this.props.desc}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-muted">Written by {this.props.first} {this.props.last}</li>
                        <li className="list-group-item text-muted">Posted {this.props.date}</li>


                        <li className="list-group-item">
                            <p>{this.props.hashtags.map(item => <span key={item} className="badge badge-secondary" >{item}</span>)}</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Post;