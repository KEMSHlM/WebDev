"use strict";
class Person {
    // staticは，Personクラスが作られる前に，生成されるからメンバにアクセスはできない．
    static isAdult(age) {
        if (age > 17)
            return true;
        else
            false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    // this はname:stringを持つことを指定できる
    greeting() {
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}.`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
console.log(teacher.subject); // 'Math'
