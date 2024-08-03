describe("cumMixer", function () {
  it("должен вернуть сумму объемов всех порций", function () {
    const data = [
      { producer: "Vasya", volume: 50 },
      { producer: "Sanya", volume: 60 },
      { producer: "Siroja", volume: 70 },
    ];
    const result = cumMixer(data);
    expect(result).to.equal(180);
  });

  it("должен вернуть 0, если массив пуст", function () {
    const data = [];
    const result = cumMixer(data);
    expect(result).to.equal(0);
  });

  it("должен правильно работать с одной порцией", function () {
    const data = [{ producer: "Vasya", volume: 50 }];
    const result = cumMixer(data);
    expect(result).to.equal(50);
  });

  it("должен правильно работать с нулевыми объемами", function () {
    const data = [
      { producer: "Vasya", volume: 0 },
      { producer: "Sanya", volume: 0 },
      { producer: "Siroja", volume: 0 },
    ];
    const result = cumMixer(data);
    expect(result).to.equal(0);
  });
});
