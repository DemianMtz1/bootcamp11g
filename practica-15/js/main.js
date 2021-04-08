const getFirstLetter = text => {
    let newArr = text.split(' ');
    let newText = "";
    newArr.forEach(item => newText += `${item.charAt(0)}. `)
    return newText;
}

const getVocal = (text) => {
    let result = {
        [text]: text.match(/[aeiou]/g).length
    }
    return result;
}




