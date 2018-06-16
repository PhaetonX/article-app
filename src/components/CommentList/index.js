import React, { Component } from 'react';
import Comment from '../Comment';
import PropTypes from 'prop-types';
import CommentForm from '../CommentForm';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    static defaultProps = {
        comments: []
    };

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

        if (!comments || !comments.length) return  (
            <div>
                <p> No comments yet </p>
                <CommentForm />
            </div>
        );

        return (
            <ul>
                {comments.map(id => <li key = {id}> <Comment id = {id}/> </li>)}
                <CommentForm />
            </ul>
        ) 
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}

export default CommentList;