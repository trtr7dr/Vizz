# Vizz
Vizz — класс для визуализации различных потоков данных в Canvas.
Страница проекта — https://gloagent.ru/category/blog/web/vizz.html
## Демо
* mode_1, sqr — https://gloagent.ru/vizz2
* mode_1, cir — https://gloagent.ru/vizz3
* mode_1, tri — https://gloagent.ru/vizz4
* mode_1, sqr + glitch — https://gloagent.ru/vizz9
* mode_2 — https://gloagent.ru/vizz5
* mode_3 — https://gloagent.ru/vizz6
* mode_4, def — https://gloagent.ru/vizz7
* mode_4, big + glitch — https://gloagent.ru/vizz8
* mode_4 + invert glitch — https://gloagent.ru/vizz10
## Параметры
```javascript
new Vizz(element_id, color, bg_color); //id элемента для канваса, цвет внутренностей, цвет фона для обратных помех
```
### Mode 1
```javascript
/**
     * Режим 1.
     * Чередование чисел в последовательности. Четные числа рисуют N элементов в линии. Нечетные делают N пропусков в каретке, где N — это число.
     *
     * @param {object} d - набор цифр для отрисовки.
     * @param {number} w_elem - ширина элемента.
     * @param {number} h_elem - высота элемента.
     * @param {string} mode - режим отрисовки. Если true, то в отрисовке значения не будут вылезать за область видимости канваса.
     * @param {string} type - тип фигуры. По умолчанию: четырехугольник w_elem*h_elem. sqr — прямоугольник. cir — окружность радиуса w_elem и отступом от предыдущего ряда в h_elem. tri — треугольник с шириной w_elem и отступом от предыдущего ряда h_elem. ser — как треугольники, но маленькие линии
     * @param {number} margin - отступы между элементами.
     */
```
### Mode 2
```javascript
/**
     * Режим 2.
     * "Кривая" из чисел. Чем больше число, тем сильнее отклонение от середины
     *
     * @param {object} d - набор цифр для отрисовки.
     * @param {number} wel - ширина элемента. По умолчанию: ширина конваса / число элементов.
     * @param {number} hel - высота элемента. По умолчанию: высота конваса / число элементов.
     */
```
### Mode 3
```javascript
/**
     * Режим 3.
     * Гнутая линия
     *
     * @param {object} d
     * @param {number} wel
     * @param {number} h - ширина линии
     * @param {boolean} norm - нормализация. True: поток нормализуется исходя из размеров экрана.
     * @param {number} ref - обновление. Если есть, то очищает канвас только на rel шаге.
     * @param {Array} color - цвета. 0 - предел для низкого значения, 1 - предел для среднего. 2 - предел самого громкого
     */
```
### Mode 4
```javascript
/**
     * Режим 4.
     * Текст
     *
     * @param {object} d
     * @param {number} wel — ширина "пикселя"
     * @param {number} margin - отступы между элементами.
     * @param {string} mode - режимы. По умолчанию: вывод всех символов с указанной шириной на всем канвасе. 'big' — первый символ в потоке по центру экрана.
     */
```
### Mode 5
```javascript
/**
     * Режим 5.
     * Круг
     *
     * @param {object} d
     * @param {number} h - ширина линии
     * @param {boolean} norm - нормализация. True: поток нормализуется исходя из размеров экрана.
     * @param {number} ref - обновление. Если есть, то очищает канвас только на rel шаге.
     * @param {Array} color - цвета. 0 - предел для низкого значения, 1 - предел для среднего. 2 - предел самого громкого
     */
```
### Glitch
```javascript
/**
     * Помехи.
     *
     * @param {number} mode - режим. -1 для негативных помех. Остальное для обычных.
     * @param {number} w - ширина помех.
     * @param {number} h - высота помех.
     * @param {number} margin - отступы.
     */
```
