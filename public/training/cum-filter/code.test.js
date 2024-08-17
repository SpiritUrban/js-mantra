describe("cumFilter", function () {
  it("должны вернуть масив с именами лучших производитетей", function () {
    const data = [
      { producer: "Vasya", volume: 50, taste: "tasty" },
      { producer: "Sanya", volume: 60, taste: "ugly" },
      { producer: "Siroja", volume: 70, taste: "strange" },
    ];
    const result = cumFilter(data);
    expect(result).to.deep.equal(["Vasya"]);
  });

  it("должны вернуть пустой масив при получении пустого масива", function () {
    const data = [];
    const result = cumFilter(data);
    expect(result).to.deep.equal([]);
  });
});
