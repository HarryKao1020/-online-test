// 第一題
function reverseText(text) {
    return text.split("").reverse().join("")
}

// 第一題加分題
function reverseText2(text) {
    var a = reverseText(text)
    return a.split(" ").reverse().join(" ")
}
