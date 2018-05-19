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
    }

    state = {
        isOpen: false,
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
                
            </div>
        )
    };


    getBody = () => {
        const {article} = this.props;
        if (!this.state.isOpen) return null

        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments}/>
            </section>
        )
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
};

export default Article;