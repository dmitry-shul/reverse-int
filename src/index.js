module.exports = function reverse (n) {
    n < 0 ? n *= -1 : n;
    n[n.length - 1] == 0 ? n.slice(0, n.length - 2) : n;
    return n.toString().split("").reverse().join("");
}
