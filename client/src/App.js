import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import Launch from './components/Launch';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
        <Router>
            <div className="App">
                <div className="container">
                    <Route exact path="/" component={Launches} />
                    <Route exact path="/launch/:flight_number" component={Launch} />
                </div>
            </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;
