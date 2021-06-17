import ReactDOM from "react-dom";
import React from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"; // import the symbols we need from @apollo/client:
import App from "./App";
import "./index.css";

/**
 * we'll initialize ApolloClient, passing its constructor a configuration object with uri and cache fields:
 */
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com"
});

ReactDOM.render(
    <div>
        {/* You connect Apollo Client to React with the ApolloProvider component */}
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </div>,
    document.getElementById("root")
);
