import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SelectFilter from './Select';
import DateRange from './DateRange';

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <div>
            <DateRange />
                <SelectFilter articles = {this.props.articles}  />
            </div>
        );
    }
}

export default connect(state => ({
    articles: state.articles
}))(Filters);