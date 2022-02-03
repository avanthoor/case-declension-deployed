const caseDeclension = (word, requiredCase) => {
    let wordArr = [...word.toLowerCase().replace(/\s+/g, '')]
    let lastLetter = wordArr.length - 1
    let penultimateLetter = wordArr.length - 2
    let thirdFromEndLetter = wordArr.length - 3
    let wordType = null

    switch (wordArr[lastLetter]) {
        case 'а':
            if (/[бвдзлмнпрстфц]/.test(wordArr[penultimateLetter])) {
                wordType = 1
            } else {
                wordType = 2
            }
            break

        case 'я':
            if (/и/.test(wordArr[penultimateLetter])) {
                wordType = 3
            } else if (/ь/.test(wordArr[penultimateLetter])) {
                wordType = 4
            } else if (/аеиоуыэ/.test(wordArr[penultimateLetter])) {
                wordType = 5
            } else {
                wordType = 6
            }
            break

        case 'о':
            wordType = 7
            break

        case 'е':
            if (/щ/.test(wordArr[penultimateLetter])) {
                wordType = 8
            } else if (/о/.test(wordArr[penultimateLetter])) {
                wordType = 9
            } else {
                wordType = 10
            }
            break

        case 'й':
            wordType = 11
            break

        case 'ц':
            if (/л/.test(wordArr[thirdFromEndLetter])) {
                wordType = 12
            } else {
                wordType = 13
            }
            break

        case 'ь':
            if (/[жш]/.test(wordArr[penultimateLetter]) && /о/.test(wordArr[thirdFromEndLetter])) {
                wordType = 14
            } else {
                wordType = 15
            }
            break

        case 'к':
            if (/о/.test(wordArr[penultimateLetter])) {
                wordType = 16
            }
            break

        default:
            if (word === 'ров') {
                wordType = 17
            } else if (/[её]/.test(wordArr[penultimateLetter]) && /л/.test(wordArr[thirdFromEndLetter])) {
                wordType = 18
            } else if (/[вжк]/.test(wordArr[lastLetter])) {
                wordType = 19
            } else {
                wordType = 20
            }
    }

    switch (requiredCase) {
        case 'R':

            switch (wordType) {
                case 1:
                    wordArr[lastLetter] = 'ы'
                    break

                case 2:
                    wordArr[lastLetter] = 'и'
                    break

                case 3:
                    wordArr[lastLetter] = 'и'
                    break

                case 4:
                    wordArr[lastLetter] = 'и'
                    break

                case 5:
                    wordArr[lastLetter] = 'и'
                    break

                case 6:
                    wordArr[lastLetter] = 'и'
                    break

                case 7:
                    wordArr[lastLetter] = 'а'
                    break

                case 8:
                    wordArr[lastLetter] = 'а'
                    break

                case 9:
                    wordArr[lastLetter] = 'г'
                    wordArr[lastLetter + 1] = 'о'
                    break

                case 10:
                    wordArr[lastLetter] = 'я'
                    break

                case 11:
                    wordArr[lastLetter] = 'я'
                    break

                case 12:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'а'
                    break

                case 13:
                    wordArr[penultimateLetter] = 'ц'
                    wordArr[lastLetter] = 'а'
                    break

                case 14:
                    delete wordArr[thirdFromEndLetter]
                    wordArr[lastLetter] = 'и'
                    break

                case 15:
                    wordArr[lastLetter] = 'и'
                    break

                case 16:
                    wordArr[penultimateLetter] = 'к'
                    wordArr[lastLetter] = 'а'
                    break

                case 17:
                    wordArr[penultimateLetter] = 'в'
                    wordArr[lastLetter] = 'а'
                    break

                case 18:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'а'
                    break

                case 19:
                    wordArr[lastLetter + 1] = 'а'
                    break

                case 20:
                    wordArr[lastLetter + 1] = 'а'
                    break
            }

            break

        case "D":

            switch (wordType) {
                case 1:
                    wordArr[lastLetter] = 'e'
                    break

                case 2:
                    wordArr[lastLetter] = 'e'
                    break

                case 3:
                    wordArr[lastLetter] = 'и'
                    break

                case 4:
                    wordArr[lastLetter] = 'е'
                    break

                case 5:
                    wordArr[lastLetter] = 'и'
                    break

                case 6:
                    wordArr[lastLetter] = 'e'
                    break

                case 7:
                    wordArr[lastLetter] = 'у'
                    break

                case 8:
                    wordArr[lastLetter] = 'у'
                    break

                case 9:
                    wordArr[lastLetter] = 'м'
                    wordArr[lastLetter + 1] = 'у'
                    break

                case 10:
                    wordArr[lastLetter] = 'ю'
                    break

                case 11:
                    wordArr[lastLetter] = 'ю'
                    break

                case 12:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'у'
                    break

                case 13:
                    wordArr[penultimateLetter] = 'ц'
                    wordArr[lastLetter] = 'у'
                    break

                case 14:
                    delete wordArr[thirdFromEndLetter]
                    wordArr[lastLetter] = 'и'
                    break

                case 15:
                    wordArr[lastLetter] = 'и'
                    break

                case 16:
                    wordArr[penultimateLetter] = 'к'
                    wordArr[lastLetter] = 'у'
                    break

                case 17:
                    wordArr[penultimateLetter] = 'в'
                    wordArr[lastLetter] = 'у'
                    break

                case 18:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'у'
                    break

                case 19:
                    wordArr[lastLetter + 1] = 'у'
                    break

                case 20:
                    wordArr[lastLetter + 1] = 'у'
                    break
            }

            break

        case 'V':

            switch (wordType) {
                case 1:
                    wordArr[lastLetter] = 'у'
                    break

                case 2:
                    wordArr[lastLetter] = 'у'
                    break

                case 3:
                    wordArr[lastLetter] = 'ю'
                    break

                case 4:
                    wordArr[lastLetter] = 'ю'
                    break

                case 5:
                    wordArr[lastLetter] = 'ю'
                    break

                case 6:
                    wordArr[lastLetter] = 'ю'
                    break

                case 11:
                    wordArr[lastLetter] = 'я'
                    break

                case 13:
                    wordArr[penultimateLetter] = 'ц'
                    wordArr[lastLetter] = 'а'
                    break

                case 18:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'а'
                    break

                case 19:
                    wordArr[lastLetter + 1] = 'а'
                    break
            }

            break

        case 'T':

            switch (wordType) {
                case 1:
                    wordArr[lastLetter] = 'о'
                    wordArr[lastLetter + 1] = 'й'
                    break

                case 2:
                    wordArr[lastLetter] = 'о'
                    wordArr[lastLetter + 1] = 'й'
                    break

                case 3:
                    wordArr[lastLetter] = 'е'
                    wordArr[lastLetter + 1] = 'й'
                    break

                case 4:
                    wordArr[lastLetter] = 'ё'
                    wordArr[lastLetter + 1] = 'й'
                    break

                case 5:
                    wordArr[lastLetter] = 'е'
                    wordArr[lastLetter + 1] = 'й'
                    break

                case 6:
                    wordArr[lastLetter] = 'е'
                    wordArr[lastLetter + 1] = 'й'
                    break

                case 7:
                    wordArr[lastLetter] = 'о'
                    wordArr[lastLetter + 1] = 'м'
                    break

                case 8:
                    wordArr[lastLetter] = 'е'
                    wordArr[lastLetter + 1] = 'м'
                    break

                case 9:
                    wordArr[penultimateLetter] = 'ы'
                    wordArr[lastLetter] = 'м'
                    break

                case 10:
                    wordArr[lastLetter + 1] = 'м'
                    break

                case 11:
                    wordArr[lastLetter] = 'е'
                    wordArr[lastLetter + 1] = 'м'
                    break

                case 12:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'е'
                    wordArr[lastLetter + 2] = 'м'
                    break

                case 13:
                    wordArr[penultimateLetter] = 'ц'
                    wordArr[lastLetter] = 'о'
                    wordArr[lastLetter + 1] = 'м'
                    break

                case 14:
                    wordArr[lastLetter + 1] = 'ю'
                    break

                case 15:
                    wordArr[lastLetter + 1] = 'ю'
                    break

                case 16:
                    wordArr[penultimateLetter] = 'к'
                    wordArr[lastLetter] = 'о'
                    wordArr[lastLetter + 1] = 'м'
                    break

                case 17:
                    wordArr[penultimateLetter] = 'в'
                    wordArr[lastLetter] = 'о'
                    wordArr[lastLetter + 1] = 'м'
                    break

                case 18:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'о'
                    wordArr[lastLetter + 2] = 'м'
                    break

                case 19:
                    wordArr[lastLetter + 1] = 'о'
                    wordArr[lastLetter + 2] = 'м'
                    break

                case 20:
                    wordArr[lastLetter + 1] = 'о'
                    wordArr[lastLetter + 2] = 'м'
                    break
            }

            break

        case 'P':

            switch (wordType) {
                case 1:
                    wordArr[lastLetter] = 'е'
                    break

                case 2:
                    wordArr[lastLetter] = 'е'
                    break

                case 3:
                    wordArr[lastLetter] = 'и'
                    break

                case 4:
                    wordArr[lastLetter] = 'е'
                    break

                case 5:
                    wordArr[lastLetter] = 'и'
                    break

                case 6:
                    wordArr[lastLetter] = 'е'
                    break

                case 7:
                    wordArr[lastLetter] = 'е'
                    break

                case 8:
                    wordArr[lastLetter] = 'е'
                    break

                case 9:
                    wordArr[lastLetter] = 'м'
                    break

                case 11:
                    wordArr[lastLetter] = 'е'
                    break

                case 12:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'е'
                    break

                case 13:
                    wordArr[penultimateLetter] = 'ц'
                    wordArr[lastLetter] = 'е'
                    break

                case 14:
                    delete wordArr[thirdFromEndLetter]
                    wordArr[lastLetter] = 'и'
                    break

                case 15:
                    wordArr[lastLetter] = 'и'
                    break

                case 16:
                    wordArr[penultimateLetter] = 'к'
                    wordArr[lastLetter] = 'е'
                    break

                case 17:
                    wordArr[penultimateLetter] = 'в'
                    wordArr[lastLetter] = 'е'
                    break

                case 18:
                    wordArr[penultimateLetter] = 'ь'
                    wordArr[lastLetter + 1] = 'е'
                    break

                case 19:
                    wordArr[lastLetter + 1] = 'е'
                    break

                case 20:
                    wordArr[lastLetter + 1] = 'е'
                    break
            }

            break
    }

    // return wordType
    return wordArr.join('')
}

export default caseDeclension