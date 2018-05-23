import React, {Component} from 'react';
import ArticleList from './ArticleList';
import { hot } from 'react-hot-loader';
import Filters from './Filters';



class App extends Component {
    render() {
        const {articles} = this.props;

        return (
            <div>
                <Filters />
                <ArticleList />
            </div>
        )
    }
}

export default hot(module)(App)