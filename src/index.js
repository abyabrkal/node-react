import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <div>
        <h2 className="text-center">
            {props.headerMessage}
        </h2>
        </div>
    );
};


// Props validation to specify the types 
// very much required
App.propTypes = {
    headerMessage: React.PropTypes.string.isRequired
};

App.defaultProps = {
    headerMessage: 'Hello!!'
};

ReactDOM.render(    
    <App headerMessage="Hello Props"/>,
    document.getElementById('root')
);