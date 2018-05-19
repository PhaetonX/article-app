import React, { Component } from 'react';
import Comment from '../Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                <button onClick = {this.toggleOpen}>
                    {this.state.isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody = () => {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;

        if (!comments || !comments.length) return <p> No comments yet </p>

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}> <Comment comment = {comment}/> </li>)}
            </ul>
        ) 
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}

export default CommentList;