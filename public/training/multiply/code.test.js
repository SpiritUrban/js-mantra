
describe('Функция Multiply', function () {
    it('должна вернуть 6 при умножении 2 и 3', function () {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('должна вернуть 0 при умножении любого числа на 0', function () {
        expect(multiply(5, 0)).to.equal(0);
    });
});
