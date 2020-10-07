module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }
      let b = String(n);
      let c = b.split('');
      let d = c.reverse();
      let e = d.join('');
      let i = 0;
      let f = '';
      while (i < String(e).length) {
        if (e[0] == 0) {
          e = e.substr(1);
        }
        i++;
      }
      Number(e);
      return e;
}
