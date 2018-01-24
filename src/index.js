import React from 'react';
import ReactDOM from 'react-dom';

// Note: 
// React.PropTypes is deprecated as of React v15.5.
//
// Please use the prop-types library instead.
//       npm install --save prop-types
import PropTypes from 'prop-types'; 



const Header = ({ message }) => {
    return (
        <h2 className="Header text-center">
            {message}
        </h2>
    );
};


Header.propTypes = {
    message: PropTypes.string.isRequired
};


const App = () => {
    return (
        <div className="App">
            <Header message="Naming Contests"/>
            <div>...</div> 
        </div>
    );
};




ReactDOM.render(    
    <App />,
    document.getElementById('root')
);