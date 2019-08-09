class FChars { // v 0.9
    constructor(canvas_id) {
        this.res = [];
        this.res['A'] = [0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0];
        this.res['B'] = [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
        this.res['C'] = [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0];
        this.res['D'] = [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0];
        this.res['E'] = [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0];
        this.res['F'] = [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0];
        this.res['G'] = [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0];
        this.res['H'] = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0];
        this.res['I'] = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
        this.res['J'] = [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0];
        this.res['K'] = [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0];
        this.res['L'] = [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0];
        this.res['M'] = [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
        this.res['N'] = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0];
        this.res['O'] = [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0];
        this.res['P'] = [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0];
        this.res['Q'] = [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0];
        this.res['R'] = [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0];
        this.res['S'] = [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0];
        this.res['T'] = [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
        this.res['U'] = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0];
        this.res['V'] = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0];
        this.res['W'] = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];
        this.res['X'] = [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1];
        this.res['Y'] = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
        this.res['Z'] = [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0];
        this.res['0'] = [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0];
        this.res['1'] = [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
        this.res['2'] = [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0];
        this.res['3'] = [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
        this.res['4'] = [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0];
        this.res['5'] = [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
        this.res['6'] = [0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0];
        this.res['7'] = [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
        this.res['8'] = [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0];
        this.res['9'] = [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0];
        this.res[' '] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chars = this.res;
        this.rres = [];
        this.rres[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.rres[1] = [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1];
        this.rres[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.rres[3] = [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
        this.rres[4] = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.rres[5] = [0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0];
        this.rres[6] = [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1];
        this.rres[7] = [1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1];
        this.rres[8] = [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
        this.rres[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        this.rchars = this.rres;
    }

    randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    rand_char() {
        return this.rchars[this.randomInteger(0, this.rchars.length - 1)];
    }

    get_char(c) {
        var res = this.chars[c.toUpperCase()];
        if (res === undefined)
            res = this.rand_char();
        return res;
    }

    /**
     * Нарисовать текст на канвасе.
     *
     * @param {string} txt - Текст для отрисовки. Если символ не найдет, рисуется случайный незначащий элемент.
     * @param {canvas} canvas - это канвас.
     * @param {number} w - ширина "пикселя".
     * @param {string} color - цвет букв
     * @param {number} margin - отступы
     */
    paint_text(txt, canvas, w, color, margin) {
        if (margin === undefined)
            margin = 0;

        var all_w = this.id.offsetWidth;

        var car_h = 0;
        var car_w = 0;
        var i = 0;
        while (i < txt.length) {
            if (all_w - car_w < w * 5) {
                car_w = 0;
                car_h += w * 5 + margin;
            }
            this.paint_char(this.get_char(txt[i]), canvas, w, car_w, car_h, color);
            car_w += w * 5 + margin;
            i++;
        }
    }

    /**
     * Нарисовать символ на канвасе.
     *
     * @param {string} c - символ для отрисовки. Если не найдет, рисуется случайный незначащий элемент.
     * @param {canvas} canvas - это канвас.
     * @param {number} w - ширина "пикселя".
     * @param {number} w_pos - позиция по икс для начала рисования.
     * @param {number} h_pos - позиция по игрик для начала рисования.
     * @param {string} color - цвет букв
     */
    paint_char(c, canvas, w, w_pos, h_pos, color) {
        var c_car_w = 0;
        var c_car_h = 0;

        canvas.fillStyle = color;
        canvas.strokeStyle = color;
        for (var i = 0; i < c.length; i++) {
            if (c[i] === 1)
                canvas.fillRect(w_pos + c_car_w, h_pos + c_car_h, w, w);

            c_car_w += w;
            if (c_car_w === w * 5) {
                c_car_h += w;
                c_car_w = 0;
            }
        }
    }
}

class Vizz { // v 1.0

    randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    constructor(element_id, color, bg_color) {
        this.id = element_id;
        if (color === undefined)
            color = "#03afcc";
        this.color = color;
        if (bg_color === undefined)
            bg_color = "black";
        this.bg_color = bg_color;
        this.moment = 0;
        this.ready();
    }

    ready() {
        var canv = document.createElement('canvas');
        canv.id = 'vizz';
        canv.style.width = "100%";
        canv.style.height = "100vh";
        document.body.appendChild(canv);
        document.getElementById(this.id).appendChild(canv);
        this.canvas = document.getElementById("vizz");
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.ctx = this.canvas.getContext("2d");
        this.w = this.canvas.width;
        this.h = this.canvas.height;
    }

    max_in_arr(arr) {
        var max = isNaN(parseInt(arr[0])) ? 0 : parseInt(arr[0]);
        for (var i = 1; i < arr.length; i++) {
            if (parseInt(arr[i]) > max)
                max = parseInt(arr[i]);
        }
        return max;
    }

    min_in_arr(arr) {
        var min = isNaN(parseInt(arr[0])) ? 0 : parseInt(arr[0]);
        for (var i = 1; i < arr.length; i++) {
            if (parseInt(arr[i]) < min)
                min = parseInt(arr[i]);
        }
        return min;
    }

    data_norm(data) {
        var norm = this.max_in_arr(data);
        var min = this.min_in_arr(data);
        min--;
        if (norm === min)
            min--;
        var temp = 0;
        for (var i = 0; i < data.length; i++) {
            temp = data[i];
            data[i] = (data[i] - min) * (this.h / 2 - this.h / 2 * 0.5) / (norm - min) + this.h / 2 * 0.5;
            if (temp < 0)
                data[i] *= -1;
        }
        return data;
    }

    vizual(data) {
        var d = data;
        var l = 50;
        var mode = ['sqr', 'cir', 'tri', 'ser'];

        if (this.moment < l) { // режим 1
            this.mode_1(d, this.randomInteger(1, this.w / 5), this.randomInteger(1, this.h / 10), true, mode[this.randomInteger(0, mode.length) - 1], this.randomInteger(1, this.w / 10));
            this.moment++;
        }
        if (this.moment >= l && this.moment < l * 2) {
            this.mode_2(d, this.randomInteger(1, this.w / 4), this.randomInteger(1, this.h / 2));
            this.moment++;
        }
        if (this.moment >= l * 2 && this.moment < l * 3) {
            this.mode_3(d, this.randomInteger(1, this.w / 4), this.randomInteger(1, this.h / 10));
            this.moment++;
        }

        if (this.moment >= l * 3 && this.moment < l * 4) {
            if (this.randomInteger(0, 1) === 1)
                this.mode_4(d, this.randomInteger(1, this.w / 4), this.randomInteger(1, this.w / 10), 'big');
            else
                this.mode_4(d, this.randomInteger(1, this.w / 4), this.randomInteger(1, this.w / 10));
            this.moment++;
        }
        if (this.moment >= l * 4)
            this.moment = 0;

        if (this.randomInteger(0, 1) === 1)
            this.glitch(this.randomInteger(-1, 0));
    }

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
    mode_1(d, w_elem, h_elem, mode, type, margin) {
        if (w_elem === undefined)
            w_elem = 5;
        if (h_elem === undefined)
            h_elem = 5;
        if (margin === undefined)
            margin = 0;
        this.ctx.clearRect(0, 0, this.w, this.h);
        var i = 0, chet = true;
        var car_w = 2;
        var car_h = 2;
        h_elem = Math.ceil(h_elem, 1);
        w_elem = Math.ceil(w_elem, 1);
        var lim = d.length;
        this.ctx.fillStyle = this.color;
        while ((car_h < this.h)) {
            if (car_w > this.w) {
                car_h += h_elem;
                car_w = 0;
            } else {
                for (var k = 0; k < d[i]; k++) {
                    if (chet) {
                        switch (type) {
                            case 'sqr':
                                this.ctx.fillRect(car_w, car_h, w_elem, h_elem);
                                break;
                            case 'cir':
                                this.ctx.beginPath();
                                this.ctx.arc(car_w, car_h, w_elem, 0, 2 * Math.PI);
                                this.ctx.fill();
                                break;
                            case 'tri':
                                this.rand_triangle(car_w, car_h, w_elem, true);
                                // this.ctx.lineTo(car_w + w_elem, w_elem + 4);
                                break;
                            case 'ser':
                                this.drow_ser(car_w, car_h, w_elem, w_elem / 2);
                                break;
                            default:
                                this.ctx.fillRect(car_w, car_h, w_elem, h_elem);
                        }
                        car_w += w_elem + margin;
                    } else {
                        car_w += w_elem;
                    }
                    if (car_w > this.w && mode) {
                        car_h += h_elem + margin;
                        car_w = 0;
                    }
                }
                if (chet)
                    chet = false;
                else
                    chet = true;
            }
            i++;
            if (i > lim) {
                i = 0;
            }
        }

    }

    /**
     * Режим 2.
     * Кривая из чисел. Чем больше число, тем сильнее отклонение от середины
     *
     * @param {object} d - набор цифр для отрисовки.
     * @param {number} wel - ширина элемента. По умолчанию: ширина конваса / число элементов.
     * @param {number} hel - высота элемента. По умолчанию: высота конваса / число элементов.
     */
    mode_2(d, wel, hel) {
        if (wel === undefined)
            wel = Math.ceil(this.w / d.length, 1);
        if (hel === undefined)
            hel = Math.ceil(this.h / d.length, 1);

        this.ctx.clearRect(0, 0, this.w, this.h);
        var i = true;
        var car_w = 1;

        this.ctx.fillStyle = this.color;

        d = this.data_norm(d, this.h);

        while (car_w < this.w) {
            if (i) {
                for (var k = 0; k < d.length; k++) {
                    if (d[k] < 0)
                        d[k] += this.h / 2;
                    this.ctx.fillRect(car_w, d[k], wel, hel);
                    car_w += wel;
                }
                i = false;
            } else {
                for (var k = d.length - 1; k >= 0; k--) {
                    if (d[k] < 0)
                        d[k] += this.h / 2;
                    this.ctx.fillRect(car_w, d[k], wel, hel);
                    car_w += wel;
                }
                i = true;
            }
        }
    }

    /**
     * Режим 3.
     * Гнутая линия
     *
     * @param {object} d
     * @param {number} wel
     * @param {number} h - ширина линии
     */
    mode_3(d, wel, h) {

        if (wel === undefined)
            wel = Math.ceil(this.w / d.length, 1);
        if (h === undefined)
            h = 10;

        this.ctx.clearRect(0, 0, this.w, this.h);
        var car_w = 1;
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        d = this.data_norm(d, this.h);
        while (car_w < this.w) {
            for (var k = 0; k < d.length; k++) {
                this.ctx.beginPath();
                this.ctx.lineWidth = h;
                this.ctx.moveTo(car_w, this.h / 2);
                this.ctx.quadraticCurveTo(car_w + wel / 2, this.h / 2 + d[k], car_w + wel, this.h / 2);
                this.ctx.stroke();
                car_w += wel;
            }
        }
    }

    /**
     * Режим 4.
     * Фигура
     *
     * @param {object} d
     * @param {number} wel — ширина "пикселя"
     * @param {number} margin - отступы между элементами.
     * @param {string} mode - режимы. По умолчанию: вывод всех символов с указанной шириной на всем канвасе. 'big' — первый символ в потоке по центру экрана.
     */
    mode_4(d, wel, margin, mode) {

        if (wel === undefined)
            wel = Math.ceil(this.w / d.length, 1);
        if (margin === undefined)
            margin = 5;

        this.ctx.clearRect(0, 0, this.w, this.h);
        this.ctx.beginPath();
        this.ctx.moveTo(this.w / 2, this.h / 2);
        var car_w = 0;
        var car_h = 0;
        var char_w = wel / 5;
        d = d.join('');
        var char = new FChars();
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        while (car_h < this.h) {
            for (var k = 0; k < d.length; k++) { //сюда нужен свич с эффектами
                switch (mode) {
                    case 'big':

                        char.paint_char(char.get_char(d[0]), this.ctx, char_w * 5, this.w / 3, this.h / 6, this.color);
                        car_h += this.h;

                        break;
                    default:
                        char.paint_char(char.get_char(d[k]), this.ctx, char_w, car_w, car_h, this.color);
                        car_w += wel + margin;
                        if (car_w > this.w) {
                            car_h += wel + margin;
                            car_w = 0;
                        }
                }
            }
        }
    }

    /**
     * Помехи.
     *
     * @param {number} mode - режим. -1 для негативных помех. Остальное для обычных.
     * @param {number} w - ширина помех.
     * @param {number} h - высота помех.
     * @param {number} margin - отступы.
     */
    glitch(mode, w, h, margin) {
        if (w === undefined)
            w = this.randomInteger(1, 5);
        if (h === undefined)
            h = this.randomInteger(1, 5);
        if (margin === undefined)
            margin = this.randomInteger(1, 5);
        var car_h = 0;
        var car_w = 0;

        if (mode === -1)
            this.ctx.fillStyle = this.bg_color;
        else
            this.ctx.fillStyle = this.color;

        while ((car_h < this.h)) {
            if (car_w > this.w) {
                car_h += h + margin;
                car_w = 0;
            } else {
                for (var k = 0; k < this.w; k++) {
                    if (this.randomInteger(1, 4) === 4)
                        this.ctx.fillRect(car_w, car_h, w, h);
                    car_w += w + margin;
                }
            }
        }
    }

    /**
     * Рисовка треугольника
     *
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {bool} mode - если true — то рандомное расположение высот.
     */
    rand_triangle(x, y, w, mode) {
        this.ctx.beginPath();
        if (mode) {
            switch (this.randomInteger(1, 4)) {
                case 1:
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(x + w, y);
                    this.ctx.lineTo(x, y + w);
                    break;
                case 2:
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(x + w, y);
                    this.ctx.lineTo(x + w, y + w);
                    break;
                case 3:
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(x + w, y + w);
                    this.ctx.lineTo(x + w, y);
                    break;
                case 4:
                    this.ctx.lineTo(x + w, y);
                    this.ctx.lineTo(x + w, y + w);
                    this.ctx.lineTo(x, y + w);
                    break;
            }
        } else {
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + w, y);
            this.ctx.lineTo(x, y + w);
        }
        this.ctx.closePath();
        this.ctx.fill();
    }

    drow_ser(x, y, w, h) {
        this.ctx.beginPath();

        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + w, y);
        this.ctx.lineTo(x + w, y + h);

        this.ctx.closePath();
        this.ctx.fill();
    }
}
