import renderer from "react-test-renderer";
import App from "../App";

beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2021, 6, 1));
});

afterAll(() => {
    jest.useRealTimers();
});

it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
