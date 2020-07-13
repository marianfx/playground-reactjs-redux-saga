import React from 'react';
import './App.css';
// import PropTypes from 'prop-types';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// }

export default App;
