import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types'; 
import ContestPreview from './ContestPreview';


/* IMSIDE DEEP DIV

          {this.props.contests.map(contest =>
            <ContestPreview {...contest} />
		  )}
*/


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    // timers, listeners
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
			<ContestPreview {...this.props.contests[0]} />
        </div>
      </div>
    );
  }
}

export default App;