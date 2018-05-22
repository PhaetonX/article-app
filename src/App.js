import React, {Component} from 'react';
import ArticleList from './components/ArticleList'
import {articles} from './fixtures';
import { hot } from 'react-hot-loader';
import Filters from './components/Filters';


class App extends Component {
    render() {
        const {articles} = this.props;
        
        return (
            <div>
                <Filters articles = {articles} />
                <ArticleList articles = {articles} />
            </div>
        )
    }
}

export default hot(module)(App)