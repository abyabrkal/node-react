import React from 'react';
import Header from './Header';

class App extends React.Component {
	state = {
		pageHeader: 'Naming Contests'
	};
	componentDidMount(){
		//This code ensures that React DOM is mounted
		//If any external API(via ajax call) is fetched 
		//we will use the ajax call here, to ensure DOM'smount is completed.
		// For Timers & Listeners
	}
	componentWillUnmount(){
		// Clean Timers and Listeners
	}
	render() {
		return (
	        <div className="App">
	            <Header message={this.state.pageHeader} />
	            <div>Yeah</div> 
	        </div>
	    );
	}
};

export default App;