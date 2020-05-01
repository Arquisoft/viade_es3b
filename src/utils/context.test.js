import * as Context from "./context";

describe.only("Generate suffix", () => {
  test("get suffix", async () => {
    expect(Context.expandedProperty("prueba", "key:resultado")).toBe(
      "prueba:resultado"
    );
  });
});