abstract class Person {
    static species = 'Homo sapiens'
    // staticは，Personクラスが作られる前に，生成されるからメンバにアクセスはできない．
    static isAdult(age: number) {
        if (age > 17) return true;
        else false;
    }
    
    constructor(public readonly name: string, protected age: number) {
    }

    incrementAge() {
        this.age += 1;
    }
    
    // this はname:stringを持つことを指定できる
    greeting() {
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
        this.explainJob();
    }
    abstract explainJob(): void;
}

class Teacher extends Person {
    static instance: Teacher;
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}.`);
    }

    get subject(): string {
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

    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    } 
    
    static getInstance() {
        if (Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}

const teacher = Teacher.getInstance();
console.log(teacher.subject); // 'Math'
