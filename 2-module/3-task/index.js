let calculator = {
/*  Верно, что мое решение не проходило проверку из-за prompt или тут что-то ещё?
  read() {
    this.a = +prompt ("Первое число", 0);
    this.b = +prompt ("Второе число", 0);
    if (isNaN(this.a) || isNaN(this.b)){
      return ("Нужно число");
    }
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
*/
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
window.calculator = calculator; 