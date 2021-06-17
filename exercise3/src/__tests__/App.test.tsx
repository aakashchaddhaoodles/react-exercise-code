import App from "../App";
import TestRenderer from "react-test-renderer";

it("renders correctly", () => {
  const component = TestRenderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
