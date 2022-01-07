import React from 'react';
const faker = require('faker');

class CommentDetails extends React.Component {
    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{this.props.timeAgo}</span>
                    </div>
                    <div className="text">{this.props.comment}</div>
                </div>
            </div>
        )
    }
}

export default CommentDetails;