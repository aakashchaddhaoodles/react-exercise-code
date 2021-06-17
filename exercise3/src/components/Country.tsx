import React from "react";
// you can start requesting data with useQuery. useQuery is a React hook that shares GraphQL data with your UI
import {useQuery} from "@apollo/client";
import {COUNTRY_INFO} from "../helper/queries";
import {ChangeEvent, useState} from "react";

// interface for language
export interface Ilanguage {
    code: string;
    name: string;
}

export const CountryInfo = ({code}: {code: string}): JSX.Element => {
    if (code.length > 1) {
        /*
         * Apollo Client tracks a query's error and loading state for you, which are reflected in the loading and error properties.
         * When the result of your query comes back, it's attached to the data property.
         */
        const {loading, error, data} = useQuery(COUNTRY_INFO, {
            variables: {code}
        });

        if (loading) return <p>Loading data...</p>; //loading to show while data is fetching
        if (error) return <p>Error!: {error}</p>; // show error if fails to load

        // If Data is not null and exists, display data
        if (data.country && data.country !== null) {
            return (
                <ul>
                    <li data-testid="countryName">
                        <label> Name : </label> {data.country.name}
                    </li>
                    <li data-testid="countryCode">
                        <label>Code : </label>
                        {data.country.code}{" "}
                    </li>
                    <li data-testid="countryCurrency">
                        <label>Currency : </label>
                        {data.country.currency}
                    </li>
                    <li data-testid="countryFlag">
                        <label>Flag :</label> {data.country.emoji}
                    </li>
                    <li data-testid="countryLanguage">
                        <label>Languages :</label>
                        {data.country.languages.map((item: Ilanguage, index: number) => (
                            <span key={index}> {(index ? ", " : "") + item.name} </span>
                        ))}
                    </li>
                </ul>
            );
        } else {
            return <p>Invalid code...Try Again</p>;
        }
    }
    return <p> </p>;
};

const Country = (): JSX.Element => {
    const [countryCode, setCountryCode] = useState<string>("");

    const handleCountryCode = (e: ChangeEvent<HTMLInputElement>): void => {
        setCountryCode(e.target.value.toUpperCase());
    };

    return (
        <div className="countriesDetails">
            <input
                type="text"
                onChange={handleCountryCode}
                placeholder="Enter Country Code"
                value={countryCode}
            />

            <div className="countriesContinentResults">
                <CountryInfo code={countryCode} />
            </div>
        </div>
    );
};

export default Country;
