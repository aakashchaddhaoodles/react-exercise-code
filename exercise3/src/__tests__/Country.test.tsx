/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { CountryInfo } from "../components/Country";
import { countryWithIndiaQueryMock } from "../helper/queries.mocks";
import "@testing-library/jest-dom/extend-expect";

it("renders without error", async () => {
  const renderApp = (ccode: string) =>
    render(
      <MockedProvider mocks={countryWithIndiaQueryMock} addTypename={false}>
        <CountryInfo code={ccode} />
      </MockedProvider>
    );

  const { getByTestId } = renderApp("IN");

  await new Promise((resolve) => setTimeout(resolve, 0));

  const countryName = getByTestId("countryName");
  expect(countryName).toHaveTextContent("India");

  const countryCode = getByTestId("countryCode");
  expect(countryCode).toHaveTextContent("IN");

  const countryCurrency = getByTestId("countryCurrency");
  expect(countryCurrency).toHaveTextContent("INR");

  const countryFlag = getByTestId("countryFlag");
  expect(countryFlag).toHaveTextContent("🇮🇳");

  const countryLanguage = getByTestId("countryLanguage");
  expect(countryLanguage).toHaveTextContent("Hindi");
});
