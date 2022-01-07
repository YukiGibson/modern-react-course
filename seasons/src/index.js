import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    state = {latitude: undefined, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was just update - it rerendered');
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude}/>
        }

        return <Spinner message="Please accept location request"/>
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }


}

ReactDOM.render(<App/>, document.querySelector('#root'));