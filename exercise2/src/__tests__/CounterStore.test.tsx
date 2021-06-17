import store from "../components/CounterStore";

describe("CounterStore", () => {
  // afterEach(() => {
  //     jest.clearAllMocks();
  // });

  it("increment counter on button click", () => {
    store.increment();
    expect(store.count).toBe(1);
  });

  it("decrement counter on button click - (decrements from previous incremented value)", () => {
    store.decrement();
    expect(store.count).toBe(0);
  });
});
