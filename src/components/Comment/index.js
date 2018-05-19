import React, { Component } from 'react';

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

export default Comment;