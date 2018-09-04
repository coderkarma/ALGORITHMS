function order(words) {
    return words.split(' ').sort(function (a, b) {
        return (/\d{1,}/).exec(a) - (/\d{1,}/).exec(b)
    })
}
order("is2 Thi1s T4est 3a"); // ('Thi1s is2 3a T4est');