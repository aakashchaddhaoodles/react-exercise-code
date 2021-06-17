import React from "react";
import "./Counter.css";
import {observer} from "mobx-react"; //  observer function from mobX
import store from "./CounterStore"; //store contains all states of our applications

/**
 * counter function
 */

const Counter = (): JSX.Element => {
    return (
        <div className="counter">
            <h1 className="counterClicks">Clicks: {store.count}</h1>

            <div className="counterButtons">
                <button data-testid="button-increment" onClick={store.increment}>
                    Increment
                </button>

                <button data-testid="button-decrement" onClick={store.decrement}>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default observer(Counter);
