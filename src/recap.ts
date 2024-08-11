const myName = 'Angela';
const myAge = 12;
const sum = (a: number, b: number) => {
  return a + b;
};
sum(12, 23);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const angela = new Persona(15, 'angela');
angela.getSummary();