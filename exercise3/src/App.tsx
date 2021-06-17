import React, {FunctionComponent} from "react";
import Country from "./components/Country"; // importing country component
import Continent from "./components/Continent"; // importing continent component
import "./App.css";

/**
 *  App function displays country and continent data
 */

const App: FunctionComponent = () => {
    return (
        <div>
            <div className="countries">
                <Country />
                <Continent />
            </div>
        </div>
    );
};

export default App;
