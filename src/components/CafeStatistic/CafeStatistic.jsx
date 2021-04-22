import React, {Component} from 'react';
import styles from './CafeStatistic.module.css'

import FeedbackOptions from '../FeedbackOptions'
import Sections from '../Sections';
import Statistics from '../Statistics';
import Notification from '../Notification';

console.log(styles)

class CafeStatistic extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleClick = (statName) => {
        this.setState((state => {
            const value = state[statName];
            return {
                [statName]: value + 1,
            }
        }))
    }

    countTotalFeedback = () => {
        const total= Object.values(this.state)
        const sum = total.reduce((acum, value) => acum + value);
        return sum;

    }
    countPositiveFeedbackPercentage = () => {

        const {good} = this.state;
        let total = this.countTotalFeedback();
        if (!total) {
            return 0
        }
        const percentage = ((good / total) * 100).toFixed();

        return percentage;
    }
    createFeedbackOptions = () => {
        const feedbackOptions = [
            {
                id: "1",
                name: "good",
                onClick: () => this.handleClick("good")
            },
            {
                id: "2",
                name: "neutral",
                onClick: () => this.handleClick("neutral")
            },
            {
                id: "3",
                name: "bad",
                onClick: () => this.handleClick("bad")    
            }
        ]
        return feedbackOptions;
    }

    render() {
        const { state, createFeedbackOptions, countTotalFeedback, countPositiveFeedbackPercentage } = this;
        const total = countTotalFeedback();

        return (
            <>
                <Sections title = "Please leave feedback">
                    <FeedbackOptions options={createFeedbackOptions()} />
                </Sections>
            
                <Sections title="Statistic">
                    {!total ? <Notification message="No feedback given" />
                        : <Statistics {...state} total={total} positivePercentage={countPositiveFeedbackPercentage()} />}
                </Sections>
            </>
        );
    }
}

export default CafeStatistic;