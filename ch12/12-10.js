// 상속
class Printer {
  print() {
    console.log('기본적인 프린터!');
  }
}

class RedPrinter extends Printer {
  print() {
    console.log('🔥 출력!');
  }
}

const printer = [new Printer(), new RedPrinter()];
printer.forEach((printer) => printer.print());
