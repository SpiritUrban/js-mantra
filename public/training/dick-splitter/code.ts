
const glassDick: string = 'my dick is big';
const dickSplitter = (glassDick: string): string[] => {
    // Проверяем на пустую строку, удаляем лишние пробелы и разбиваем строку на массив слов
    return glassDick.trim() === '' ? [] : glassDick.trim().split(/\s+/);
};

