function loginController(usr) {
    if (usr.login()
        && usr.checkRoll()
        && usr.redirect()) {
        console.log('Login Success');
    } else {
        console.log('Login failed');
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.redirectTo = '/';
    }
    
    login() {
        console.log('User: ${this.name} logged in');
        return true;
    }
    
    checkRoll() {
        console.log('You have normal roll');
        return false;
    }
    
    redirect() {
        console.log('Redirect to ${this.redirectTo}');
        return true;
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
        this.redirectTo = '/admin';
    }
    
    login() {
        console.log('User: ${this.name} logged in');
        return true;
    }
    
    checkRoll() {
        console.log('You have admin roll');
        return true;
    }
    
    redirect() {
        console.log("Redirect to ${this.redirectTo}");
        return true;
    }
}

const usr = new User('Bob');
const adm = new Admin('Tom');

loginController(usr);
loginController(adm);