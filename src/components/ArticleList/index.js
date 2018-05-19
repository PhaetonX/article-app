import React, { Component } from 'react';
import Article from '../Article';
import PropTypes from 'prop-types';

const ArticleList = ({articles}) => {
    const ArticleElement = articles.map(article => <li key = { article.id }> <Article article = {article}/> </li>)

    return (
        <ul>
            {ArticleElement}
        </ul>
    );
}

ArticleList.defaultProps = {
    articles: []
};

Comment.PropTypes = ({
    articles: PropTypes.array,
}).isRequired

export default ArticleList;