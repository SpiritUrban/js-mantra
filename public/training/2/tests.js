
// Пример функции для тестирования
function add(a, b) {
    return a + b;
}

// Chai доступен глобально
const { expect } = chai;

// Определение тестового набора
describe('Функция Add', function () {
    it('должна вернуть 5 при сложении 2 и 3', function () {
        expect(add(2, 3)).to.equal(5);
    });

    it('должна вернуть 0 при сложении -1 и 1', function () {
        expect(add(-1, 1)).to.equal(0);
    });
});
