import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentsSelector} from '../../selectors'

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
    id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}).isRequired;

export default connect((state, ownProps) => {
    return {
       comment: commentsSelector(state, ownProps)
    }
})(Comment);