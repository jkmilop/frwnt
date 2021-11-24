let palindrome = str => {
    str.replace(/\W/g, '')
    str.toUpperCase()
    let s = str.length
    let ar
    let m = Math.ceil(s / 2)
    if (s % 2 === 0) ar = str.slice(0, m)
    else ar = str.slice(0, m - 1)
    let li = str.slice(m)
    let er = li.split("").reverse().join("");

    return (ar == er)

}

palindrome("eye")