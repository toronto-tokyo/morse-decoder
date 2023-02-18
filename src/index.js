const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    for(let i = 0; i < expr.length; i += 10){
        arr.push(expr.slice(i, i + 10))
    }
    let arrMorse = arr.map(item => {
        let itemMorse = ''
        for(let i = 0; i < item.length; i += 2){
            if(item.slice(i, (i + 2)) === '00') itemMorse += ''
            if(item.slice(i, (i + 2)) === '11') itemMorse += '-'
            if(item.slice(i, (i + 2)) === '10') itemMorse += '.'
            if(item.slice(i, (i + 2)) === '**') return ' '
        }
        return itemMorse
    })
    let arrMorseDecode = arrMorse.map(item => {
        if(item === ' ') return ' '
        return MORSE_TABLE[item]
    })
    return arrMorseDecode.join('')
}

module.exports = {
    decode
}