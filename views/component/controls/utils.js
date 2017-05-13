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
 * @param e
 */

export function checkTextInput (e) {
    e.target.value ? e.target.parentNode.classList.add('custom-label_validation--true')
        : e.target.parentNode.classList.remove('custom-label_validation--true')
}
