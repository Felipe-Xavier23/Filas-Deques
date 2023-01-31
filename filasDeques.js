class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(iten) {
    this.itens.push(iten);
  }

  isEmpty() {
    return this.itens.length == 0;
  }

  dequeue(){
    if(this.Empty
  }
}

const fila = new Fila();
console.log(fila.isEmpty());

fila.enqueue('Ferrari');
fila.enqueue('gol');
fila.enqueue('celta');

console.table(fila.itens);
console.log(fila.isEmpty());


