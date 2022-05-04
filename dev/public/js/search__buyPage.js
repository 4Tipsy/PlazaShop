function search__buyPage(array, options) {
    // отсортирует массив с товарами и вернет новый отсортированный массив массив
    // options = {*option name*: [*option value*, *option value*...], ...}
    let newArray = []

    array.forEach(
        (item) => {
            if (checkOneItem(item, options)) {
                newArray.push(item)
            }
        }
    )
    return newArray
}


function checkOneItem(item, options) {
    // вернет массив, где каждый елемент = результат проверки опции (true/false)
    let checkResults = Object.entries(options).map(
        (option) => {
            let result = false // by default
            let key = option[0]
            let names = option[1]
            let chars = item["itemChars"]

            try {
                let char = chars[key]

                if (Array.isArray(char)) {
                    names.forEach(
                        (name) => {
                            if (char.indexOf(name) != -1) {
                                result = true
                            }
                        }
                    )
                }
                else if ((typeof char == "string")||(typeof char == "number")) {
                    names.forEach(
                        (name) => {
                            if (name == char) {
                                result = true
                            }
                        }
                    )
                }
            } catch (err){}
            return result
        }
    )
    // вернем true если все проверки = true
    // в конечном итоге, если товар прошел проверку вернется true, если хотя бы
    // по одному пункту нет - false
    if (checkResults.indexOf(false) == -1) {
        return true
    } else {
        return false
    }
}

