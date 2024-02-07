export {}

interface UserState {
    isAuthenticated(): boolean;
    displayPage(): void;
    nextState(): UserState;
}

class AuthorizedState implements UserState {
    isAuthenticated(): boolean {
        return true;
    }

    displayPage() {
        console.log("TOPページ"); 
    }
    
    nextState() {
        return new UnAuthorizedState(); 
    }
}

class UnAuthorizedState implements UserState {
    isAuthenticated(): boolean {
        return false;
    }

    displayPage() {
        console.log("ページは存在しません．"); 
    }
    
    nextState() {
        return new AuthorizedState(); 
    }
}

class User {
    private state: UserState = new UnAuthorizedState();
    
    isAuthenticated(): boolean {
        return this.state.isAuthenticated(); 
    }
    
    displayPage() {
        this.state.displayPage();
    }
    
    switchState() {
        this.state = this.state.nextState();
    }
}

function run() {
    const user = new User();
    console.log(user.isAuthenticated());
    user.displayPage();

    user.switchState();
    console.log(user.isAuthenticated());
    user.displayPage();
}

run();