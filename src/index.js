/**
 * Принимает объект, возвращает массив названий свойств. Нельзя пользоваться
 * встроенными статическими методами объекта, используйте цикл
 * @param {Object} object
 * @returns {string[]}
 */
export const keys = (object) => {
    let array = [];
    for (let key in object) {
        array.push(key);
    }
    return array;
};

/**
 * Принимает объект, возвращает массив значений объекта. Также без использования
 * встроенных методов, юзаем цикл
 * @param {Object} object
 * @returns {any[]}
 */
export const values = (object) => {
    let array = [];
    for (let key in object) {
        array.push(object[key]);
    }
    return array;
};

/**
 * Принимаем объект, возвращаем энтри. Все также без методов, используем цикл
 * @param {Object} object
 * @returns {[string, any][]}
 */
export const entries = (object) => {
    let array = [];
    for (const key in object) {
        let arr = [key, object[key]];
        array.push(arr);
    }
    return array;
};

/**
 * Тут наоборот, мы должны сделать из энтри объект обратно) Можете погуглить
 * оригинальный метод)
 * @param {[string, any][]} entries
 * @returns {Object}
 */
export const fromEntries = (entries) => {
    let obj = {}
         for (let [key, value] of entries) {
             obj[key] = value;
    }
    return obj;
};
