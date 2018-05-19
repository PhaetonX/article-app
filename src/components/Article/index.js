import React, { Component } from 'react';
import CommentList from '../CommentList';


class Article extends Component {
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