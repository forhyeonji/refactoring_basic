// 컴포지션(위임)
class Printer {
  #printerDelegate;
  constructor(printerDelegate) {
    this.#printerDelegate = printerDelegate;
  }
  print() {
    this.#printerDelegate
      ? this.#printerDelegate.print()
      : console.log('기본적인 프린터!');
  }
}

class RedPrinter {
  print() {
    console.log('🔥 출력!');
  }
}

class BlackPrinter {
  print() {
    console.log('📞 출력!');
  }
}

const printer = [
  new Printer(),
  new Printer(new RedPrinter()),
  new Printer(new BlackPrinter())
];
printer.forEach((printer) => printer.print());
