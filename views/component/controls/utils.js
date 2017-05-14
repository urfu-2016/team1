/**
 * Проверка на наличие прикрепленных данных и добавление/удаление класса
 * @param {Object} e - DOM-узел
 */

export function checkFileInput (e) {
    e.target.files.length > 0 ? e.target.parentNode.classList.add('custom-label_validation--true')
        : e.target.parentNode.classList.remove('custom-label_validation--true')
}

/**
 * Проверка на наличие введенных данных и добавление/удаление класса
 * @param {Object} e - DOM-узел
 */

export function checkTextInput (e) {
    e.target.value ? e.target.parentNode.classList.add('custom-label_validation--true')
        : e.target.parentNode.classList.remove('custom-label_validation--true')
}

/**
 * Проверка на наличие введенных данных, проверка на число, проверка на совподение с рег. выражением
 * и добавление/удаление класса +
 * @param {Object} e - DOM-узел
 */

export function checkInputForNumber (e) {
    let value = e.target.value;
    let valueClass = e.target.parentNode.classList;
    let dataTemplate = /^\d{2}.\d{7}$/.test(value);

    if (value && !isNaN(value) && dataTemplate) {
        valueClass.add('custom-label_validation--true');
        valueClass.remove('custom-label_validation--error');
    } else if ((value && isNaN(value)) || (value && !dataTemplate)) {
        valueClass.add('custom-label_validation--error');
        valueClass.remove('custom-label_validation--true');
    } else {
        valueClass.remove('custom-label_validation--true');
        valueClass.remove('custom-label_validation--error');
    }
}

