import React, { Component } from 'react';
import CommentList from '../CommentList';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css'



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
                <button onClick = {this.handleDelete}>
                    delete
                </button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    transitionAppearTimeout = {500}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
                
            </div>
        )
    };

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id)
    };

    getBody = () => {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;

        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments}/>
            </section>
        )
    };
}

export default Article;