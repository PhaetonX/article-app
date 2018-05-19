import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './components/ArticleList';
import {articles} from './fixtures'

const jsx = <div className="content">Content</div>;

ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('app'));