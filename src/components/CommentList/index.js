import React, { Component } from 'react';
import Comment from '../Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

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