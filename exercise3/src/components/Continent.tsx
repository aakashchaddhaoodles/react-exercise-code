import React, {FunctionComponent} from "react";
import {CONTINENT_INFO} from "../helper/queries";
//  you can start requesting data with useQuery. useQuery is a React hook that shares GraphQL data with your UI
import {useQuery} from "@apollo/client";
import {ChangeEvent, useState} from "react";

export interface Icountry {
    code: string;
    name: string;
    emoji: string;
}

export const ContinentInfo = ({code}: {code: string}): JSX.Element => {
    if (code.length > 1) {
        /**
         * Apollo Client tracks a query's error and loading state for you, which are reflected in the loading and error properties.
         * When the result of your query comes back, it's attached to the data property.
         */
        const {loading, error, data} = useQuery(CONTINENT_INFO, {
            variables: {code}
        });

        if (loading) return <p>Loading data...</p>;
        if (error) return <p>Error!</p>;

        if (data.continent && data.continent !== null) {
            return (
                <ul data-testid="continentDetails">
                    <h4 data-testid="continentName">Countries of {data.continent.name}</h4>
                    {data.continent.countries.map((item: Icountry, index: number) => (
                        <li key={index}>
                            <span className="country__emoji"> {item.emoji}</span>
                            {item.name}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <p>Invalid code...Try Again</p>;
        }
    }
    return <p> </p>;
};

const Continent: FunctionComponent = () => {
    const [continentCode, setContinentCode] = useState<string>("");

    const handleContinentCode = (e: ChangeEvent<HTMLInputElement>): void => {
        setContinentCode(e.target.value.toUpperCase());
    };

    return (
        <div className="coutriesContinent">
            <input
                onChange={handleContinentCode}
                type="text"
                placeholder="Enter Continent Code"
                value={continentCode}
            />
            <div className="countriesContinentResults">
                <ContinentInfo code={continentCode} />
            </div>
        </div>
    );
};

export default Continent;
