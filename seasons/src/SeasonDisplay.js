import React from 'react';
import './SeasonDisplay.css';

function seasonMessage(season) {
    if (season === 'summer') {
        return {text: 'Lets hit the beach!', iconName: 'sun'}
    }
    return {text: 'Burr, it is cold!', iconName: 'snowflake'}
}

function getSeason(latitude, month) {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

class SeasonDisplay extends React.Component {

    state = {season: ''}

    componentDidMount() {
        this.setState({season: getSeason(this.props.latitude, new Date().getMonth())})
    }

    render() {
        const {text, iconName} = seasonMessage(this.state.season)
        return (
            <div className={`season-display ${this.state.season}`}>
                <i className={`icon-left massive ${iconName} icon`}/>
                <h1>Season: {text}</h1>
                <i className={`icon-right massive ${iconName} icon`}/>
            </div>
        )
    }
}

export default SeasonDisplay;
