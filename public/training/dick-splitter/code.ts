const glassDick: string = 'my dick is big';
const dickSplitter = (glassDick: string): string[] => {
    // Удаляем лишние пробелы и разбиваем строку на массив слов
    return glassDick.trim().split(/\s+/);
};
