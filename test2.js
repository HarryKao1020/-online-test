// 第一題
function reverseText(text) {
    return text.split("").reverse().join("")
}

// 第一題加分題
function reverseText2(text) {
    var a = reverseText(text)
    return a.split(" ").reverse().join(" ")
}



// 第二題
function InputNum(num) {
    const array = []
    for (var i = 1; i <= num; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            array.push(i)
        } else if (i % 15 == 0) {
            array.push(i)
        } else {
            null
        }
    }
    return array.length
    // console.log(array)
    // console.log(array.length)
}
