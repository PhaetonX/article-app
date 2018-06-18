import {normalizedComments as defaultComments} from '../fixtures';

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc
}, {});

export default (commentState = commentsMap, action) => {
    const {type, payload} = action;

    switch (type) {

    }
    return commentState
}