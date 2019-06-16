import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
        <div className="App">
            <div className="container">
                <Launches/>
            </div>
        </div>
    </ApolloProvider>
  );
}

export default App;
