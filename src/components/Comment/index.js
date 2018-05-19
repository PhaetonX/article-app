import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
    return (
        <div>
            <p>
                {comment.text}
                <b>
                    {comment.user}
                </b>
            </p>
        </div>
    );
};

Comment.PropTypes = ({
    comment: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}).isRequired

export default Comment;