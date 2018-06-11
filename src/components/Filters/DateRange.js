import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {changeDateRange} from '../../actions'
import DayPicker , {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
        dateRange: PropTypes.object
    };

    handleDayClick = (day) => {
        this.props.changeDateRange(DateUtils.addDayToRange(day, this.props.dateRange))
    };

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    ref="dayPicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }
}

export default connect(state => ({
    dateRange: state.filters.dateRange
}), { changeDateRange })(DateRange);