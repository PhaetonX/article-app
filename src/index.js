import React from 'react';
import ReactDOM from 'react-dom';
import {articles} from './fixtures';
import App from './App';

const jsx = <div className="content">Content</div>;

ReactDOM.render(<App  articles = {articles} />, document.getElementById('app'));