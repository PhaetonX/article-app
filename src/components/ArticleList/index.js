import React, { Component } from 'react';
import Article from '../Article';

const ArticleList = ({articles}) => {
    const ArticleElement = articles.map(article => <li key = { article.id }> <Article article = {article}/> </li>)

    return (
        <ul>
            {ArticleElement}
        </ul>
    );
}

export default ArticleList;