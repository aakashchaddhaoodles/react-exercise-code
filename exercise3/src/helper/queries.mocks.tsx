import {CONTINENT_INFO, COUNTRY_INFO} from "./queries";

const countryWithIndiaQueryMock = [
    {
        request: {
            query: COUNTRY_INFO,
            variables: {code: "IN"}
        },
        result: {
            data: {
                country: {
                    name: "India",
                    code: "IN",
                    emoji: "🇮🇳",
                    currency: "INR",
                    languages: [
                        {
                            __typename: "Language",
                            name: "Hindi"
                        },
                        {
                            __typename: "Language",
                            name: "English"
                        }
                    ],
                    __typename: "Country"
                }
            }
        }
    }
];

const continentWithIndiaQueryMock = [
    {
        request: {
            query: CONTINENT_INFO,
            variables: {code: "EU"}
        },
        result: {
            data: {
                continent: {
                    __typename: "Continent",
                    name: "Europe",
                    code: "EU",
                    countries: [
                        {
                            __typename: "Country",
                            code: "AD",
                            name: "Andorra",
                            emoji: "🇦🇩"
                        },
                        {
                            __typename: "Country",
                            code: "AL",
                            name: "Albania",
                            emoji: "🇦🇱"
                        },
                        {
                            __typename: "Country",
                            code: "AT",
                            name: "Austria",
                            emoji: "🇦🇹"
                        },
                        {
                            __typename: "Country",
                            code: "AX",
                            name: "Åland",
                            emoji: "🇦🇽"
                        },
                        {
                            __typename: "Country",
                            code: "BA",
                            name: "Bosnia and Herzegovina",
                            emoji: "🇧🇦"
                        },
                        {
                            __typename: "Country",
                            code: "BE",
                            name: "Belgium",
                            emoji: "🇧🇪"
                        },
                        {
                            __typename: "Country",
                            code: "BG",
                            name: "Bulgaria",
                            emoji: "🇧🇬"
                        },
                        {
                            __typename: "Country",
                            code: "BY",
                            name: "Belarus",
                            emoji: "🇧🇾"
                        },
                        {
                            __typename: "Country",
                            code: "CH",
                            name: "Switzerland",
                            emoji: "🇨🇭"
                        },
                        {
                            __typename: "Country",
                            code: "CY",
                            name: "Cyprus",
                            emoji: "🇨🇾"
                        },
                        {
                            __typename: "Country",
                            code: "CZ",
                            name: "Czech Republic",
                            emoji: "🇨🇿"
                        },
                        {
                            __typename: "Country",
                            code: "DE",
                            name: "Germany",
                            emoji: "🇩🇪"
                        },
                        {
                            __typename: "Country",
                            code: "DK",
                            name: "Denmark",
                            emoji: "🇩🇰"
                        },
                        {
                            __typename: "Country",
                            code: "EE",
                            name: "Estonia",
                            emoji: "🇪🇪"
                        },
                        {
                            __typename: "Country",
                            code: "ES",
                            name: "Spain",
                            emoji: "🇪🇸"
                        },
                        {
                            __typename: "Country",
                            code: "FI",
                            name: "Finland",
                            emoji: "🇫🇮"
                        },
                        {
                            __typename: "Country",
                            code: "FO",
                            name: "Faroe Islands",
                            emoji: "🇫🇴"
                        },
                        {
                            __typename: "Country",
                            code: "FR",
                            name: "France",
                            emoji: "🇫🇷"
                        },
                        {
                            __typename: "Country",
                            code: "GB",
                            name: "United Kingdom",
                            emoji: "🇬🇧"
                        },
                        {
                            __typename: "Country",
                            code: "GG",
                            name: "Guernsey",
                            emoji: "🇬🇬"
                        },
                        {
                            __typename: "Country",
                            code: "GI",
                            name: "Gibraltar",
                            emoji: "🇬🇮"
                        },
                        {
                            __typename: "Country",
                            code: "GR",
                            name: "Greece",
                            emoji: "🇬🇷"
                        },
                        {
                            __typename: "Country",
                            code: "HR",
                            name: "Croatia",
                            emoji: "🇭🇷"
                        },
                        {
                            __typename: "Country",
                            code: "HU",
                            name: "Hungary",
                            emoji: "🇭🇺"
                        },
                        {
                            __typename: "Country",
                            code: "IE",
                            name: "Ireland",
                            emoji: "🇮🇪"
                        },
                        {
                            __typename: "Country",
                            code: "IM",
                            name: "Isle of Man",
                            emoji: "🇮🇲"
                        },
                        {
                            __typename: "Country",
                            code: "IS",
                            name: "Iceland",
                            emoji: "🇮🇸"
                        },
                        {
                            __typename: "Country",
                            code: "IT",
                            name: "Italy",
                            emoji: "🇮🇹"
                        },
                        {
                            __typename: "Country",
                            code: "JE",
                            name: "Jersey",
                            emoji: "🇯🇪"
                        },
                        {
                            __typename: "Country",
                            code: "LI",
                            name: "Liechtenstein",
                            emoji: "🇱🇮"
                        },
                        {
                            __typename: "Country",
                            code: "LT",
                            name: "Lithuania",
                            emoji: "🇱🇹"
                        },
                        {
                            __typename: "Country",
                            code: "LU",
                            name: "Luxembourg",
                            emoji: "🇱🇺"
                        },
                        {
                            __typename: "Country",
                            code: "LV",
                            name: "Latvia",
                            emoji: "🇱🇻"
                        },
                        {
                            __typename: "Country",
                            code: "MC",
                            name: "Monaco",
                            emoji: "🇲🇨"
                        },
                        {
                            __typename: "Country",
                            code: "MD",
                            name: "Moldova",
                            emoji: "🇲🇩"
                        },
                        {
                            __typename: "Country",
                            code: "ME",
                            name: "Montenegro",
                            emoji: "🇲🇪"
                        },
                        {
                            __typename: "Country",
                            code: "MK",
                            name: "North Macedonia",
                            emoji: "🇲🇰"
                        },
                        {
                            __typename: "Country",
                            code: "MT",
                            name: "Malta",
                            emoji: "🇲🇹"
                        },
                        {
                            __typename: "Country",
                            code: "NL",
                            name: "Netherlands",
                            emoji: "🇳🇱"
                        },
                        {
                            __typename: "Country",
                            code: "NO",
                            name: "Norway",
                            emoji: "🇳🇴"
                        },
                        {
                            __typename: "Country",
                            code: "PL",
                            name: "Poland",
                            emoji: "🇵🇱"
                        },
                        {
                            __typename: "Country",
                            code: "PT",
                            name: "Portugal",
                            emoji: "🇵🇹"
                        },
                        {
                            __typename: "Country",
                            code: "RO",
                            name: "Romania",
                            emoji: "🇷🇴"
                        },
                        {
                            __typename: "Country",
                            code: "RS",
                            name: "Serbia",
                            emoji: "🇷🇸"
                        },
                        {
                            __typename: "Country",
                            code: "RU",
                            name: "Russia",
                            emoji: "🇷🇺"
                        },
                        {
                            __typename: "Country",
                            code: "SE",
                            name: "Sweden",
                            emoji: "🇸🇪"
                        },
                        {
                            __typename: "Country",
                            code: "SI",
                            name: "Slovenia",
                            emoji: "🇸🇮"
                        },
                        {
                            __typename: "Country",
                            code: "SJ",
                            name: "Svalbard and Jan Mayen",
                            emoji: "🇸🇯"
                        },
                        {
                            __typename: "Country",
                            code: "SK",
                            name: "Slovakia",
                            emoji: "🇸🇰"
                        },
                        {
                            __typename: "Country",
                            code: "SM",
                            name: "San Marino",
                            emoji: "🇸🇲"
                        },
                        {
                            __typename: "Country",
                            code: "UA",
                            name: "Ukraine",
                            emoji: "🇺🇦"
                        },
                        {
                            __typename: "Country",
                            code: "VA",
                            name: "Vatican City",
                            emoji: "🇻🇦"
                        },
                        {
                            __typename: "Country",
                            code: "XK",
                            name: "Kosovo",
                            emoji: "🇽🇰"
                        }
                    ]
                }
            }
        }
    }
];

const errorMocks = (message: string) => {
    return [
        {
            request: {
                COUNTRY_INFO
            },
            error: new Error(message)
        }
    ];
};

export {errorMocks, countryWithIndiaQueryMock, continentWithIndiaQueryMock};
