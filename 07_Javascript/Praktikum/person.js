class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Ammar', 25);
person1.introduce();  // Output: Hello, my name is Ammar and I am 25 years old.
