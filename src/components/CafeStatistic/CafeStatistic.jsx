import React, {Component} from 'react';
import styles from './CafeStatistic.module.css'

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
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <h2>Please leave feedback</h2>
                <div>
                    <button onClick={() => this.handleClick("good")}>Good</button>
                    <button onClick={() => this.handleClick("neutral")}>Neutral</button>
                    <button onClick={() => this.handleClick("bad")}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>Positive feedback : {this.countPositiveFeedbackPercentage()}%</p>
                </div>
            </>
        );
    }
}

export default CafeStatistic;