/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ContinentInfo } from "../components/Continent";
import { continentWithIndiaQueryMock } from "../helper/queries.mocks";
import "@testing-library/jest-dom/extend-expect";

it("renders without error", async () => {
  const renderApp = (ccode: string) =>
    render(
      <MockedProvider mocks={continentWithIndiaQueryMock} addTypename={false}>
        <ContinentInfo code={ccode} />
      </MockedProvider>
    );

  const { getByTestId } = renderApp("EU");

  await new Promise((resolve) => setTimeout(resolve, 0));

  const continentDetails = getByTestId("continentDetails");
  expect(continentDetails).toHaveTextContent("Europe");

  const country = getByTestId("continentDetails");
  expect(country).toHaveTextContent("Albania");
});
