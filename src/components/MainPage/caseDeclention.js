const caseDeclension = (word, requiredCase) => {
    let wordArr = [...word.toLowerCase().replace(/\s+/g, '')]
    let lastLetter = wordArr.length - 1
    let penultimateLetter = wordArr.length - 2
    let thirdFromEndLetter = wordArr.length - 3
    let wordType = null

    switch (wordArr[lastLetter]) {
        case 'а':
            if (/[бвдзлмнпрстфц]/.test(wordArr[penultimateLetter])) {
                console.log('тип 1')
            } else {
                console.log('тип 2')
            }
            break

        case 'я':
            if (/и/.test(wordArr[penultimateLetter])) {
                console.log('тип 3')
            } else if (/ь/.test(wordArr[penultimateLetter])) {
                console.log('тип 4')
            } else if (/аеиоуыэ/.test(wordArr[penultimateLetter])) {
                console.log('тип 5')
            } else {
                console.log('тип 6')
            }
            break

        case 'о':
            console.log('тип 7')
            break

        case 'е':
            if (/щ/.test(wordArr[penultimateLetter])) {
                console.log('тип 8')
            } else {
                console.log('тип 9')
            }
            break

        case 'й':
            console.log('тип 10')
            break

        case 'ц':
            if (/л/.test(wordArr[thirdFromEndLetter])) {
                console.log('тип 11')
            } else {
                console.log('тип 12')
            }
            break

        case 'ь':
            if (/ж/.test(wordArr[penultimateLetter])) {
                console.log('тип 13')
            } else {
                console.log('тип 14')
            }
            break

        default:
            if (/[вжк]/.test(wordArr[lastLetter])) {
                console.log('тип 15')
            } else {
                console.log('тип 16')
            }
    }


    return wordArr.join('')
}

export default caseDeclension