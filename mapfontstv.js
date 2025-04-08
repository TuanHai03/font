const charMap = {
    '': 'T',
    '': 'E',
    '': 'S',
    // thêm các ký tự khác nếu có
};

function replaceMappedChars(str) {
    return str.split('').map(char => charMap[char] || char).join('');
}
