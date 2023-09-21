describe("Example Component", () => {
  test("Should be greater then 10", () => {
    // Arreglar
    let value = 5;

    //estimulo
    value = value + 2;

    // observar el resultado
    expect(value).toBeGreaterThan(10);
  });
});
