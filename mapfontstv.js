const charMap = {
    '\uE0D6': 'T',
    '\uE0D8': 'E',
    '\uE0D7': 'S',
};

function replaceMappedChars(str) {
    return str.split('').map(c => charMap[c] || c).join('');
}
