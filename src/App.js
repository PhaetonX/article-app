import React, {Component} from 'react';
import ArticleList from './components/ArticleList'
import {articles} from './fixtures'
import { hot } from 'react-hot-loader';

class App extends Component {
    render() {
        return (
            <div>
                <ArticleList articles = {articles} />
            </div>
        )
    }
}

export default hot(module)(App)