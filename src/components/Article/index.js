import React, { Component } from 'react';
import CommentList from '../CommentList';
import PropTypes from 'prop-types';


class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            text: PropTypes.string
        }).isRequired
    };

    static defaultProps = {
        article: []
    }

    state = {
        isOpen: false,
    };

    render() {
        const {article, toggleOpen} = this.props;
        const {isOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
                
            </div>
        )
    };



    getBody = () => {
        const {article, isOpen} = this.props;
        if (!isOpen) return null

        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments}/>
            </section>
        )
    };
};

export default Article;